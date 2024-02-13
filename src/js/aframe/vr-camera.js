import VrComponent from '../classes/VrComponent';
import { awaitPoints, getDataFromName, resetSceneComponents, setData, updateComponentsChild } from '../utils';

export class vrCamera extends VrComponent{
  constructor() {
    super();
    this.cameraEl = null;
    this.controls = null;
  }

  created() {
    return new Promise(resolve => {

      const controlEntity = document.createElement('a-entity');
      controlEntity.setAttribute('movement-controls', 'fly: true');
      controlEntity.setAttribute('position', {x: 0, y: 0, z: 0});

      const cameraEntity = document.createElement('a-entity');
      const cursorEntity = document.createElement('a-entity');

      cameraEntity.setAttribute('id', 'camera');
      cameraEntity.setAttribute('look-controls', '');
      cameraEntity.setAttribute('camera', '');
      cameraEntity.setAttribute('vr-camera', '');
      
      cameraEntity.classList.add('vr__camera');

      cursorEntity.setAttribute('id', 'vr-cursor');
      cursorEntity.setAttribute('position', {x: 0.0001, y: -0.0265, z:  -1});


      cursorEntity.setAttribute('cursor', {
        'fuse': true,
        'fuseTimeout': 1500,
      }, true);

      cursorEntity.setAttribute('material', {
        'color': 'white',
        'shader': 'flat',
      }, true);

      cursorEntity.setAttribute('geometry', {
        'primitive': 'ring',
        'radiusInner': 0.013,
        'radiusOuter': 0.016,
      }, true);

      cursorEntity.setAttribute('raycaster', 'objects: [data-raycastable]');

      controlEntity.append(cameraEntity);
      controlEntity.append(cursorEntity);

      const laserControl = document.createElement('a-entity');
      laserControl.setAttribute('id', 'vrControl');
      laserControl.setAttribute('laser-controls', 'hand: right');
      laserControl.setAttribute('raycaster', 'objects: .clickable');

      controlEntity.append(laserControl);

      resolve(controlEntity);

    });
  }

  init() {
    const self = this;

    AFRAME.registerComponent('vr-camera', {
      init: function () {
        this.el.addEventListener('loaded', () => {

          const isMobile = AFRAME.utils.device.isMobile();

          self.cameraEl = this.el;
          self.controls = document.querySelector('[data-js="controls"]');

          if (isMobile) {
            this.el.setAttribute('rotation-reader', '');
            this.el.setAttribute('listener', '');
            this.el.setAttribute('look-controls', 'reverseMouseDrag:true; touchEnabled: false');
          }

          this.el.sceneEl.addEventListener('change-mode', async (e) => {
            if (e.detail.enterVr) {
              self.enterVR(this.el, this.el.sceneEl);
            }
          });

        });

      }
    });
  }

  enterVR(parentEl, sceneEl) {

    const clickable = sceneEl.querySelectorAll('.clickable');

    const textListener = sceneEl.querySelector('[content-listener]');
    const modals = sceneEl.querySelectorAll('[data-scene-modal]');
    const infoWidget = textListener.querySelector('[data-scene="content-info"]');
    const helpWidget = textListener.querySelector('[data-scene="content-help"]');
    const liftWidget = textListener.querySelector('[data-scene="content-return"]');

    const shemeMap = sceneEl.querySelector('[data-vr="vr-map"]');
    const toggleText = sceneEl.querySelector('[data-vr="toggle-text"]');

    //this.handlePoint(document.querySelector('.vr__point_lift'), sceneEl)

    clickable.forEach(click => {
      click.addEventListener('click', (evt) => {
        const clicked = evt.target;
        const target = clicked.getAttribute('target');
        
        if (!target) {
          return;
        }

        switch (target) {
          case 'open-info':
            textListener.setAttribute('position', {x: 0.0001, y: 1.8, z: -2.8});
            infoWidget.classList.add('scene__modal-content_show');
            break;

          case 'close-modal':
            modals.forEach(modal => modal.classList.remove('scene__modal-content_show'));
            break;
          
          case 'open-help':
            textListener.setAttribute('position', {x: -2, y: 1.6, z: -1.5});
            helpWidget.classList.add('scene__modal-content_show');
            break;

          case 'return':
            window.location.href = 'https://gremgok.ru/';
            break;

          case 'open-lift':
            textListener.setAttribute('position', {x: -3, y: 1.5, z: -0.5});
            liftWidget.classList.add('scene__modal-content_show');
            break;
        
          case 'show-map':
            shemeMap.classList.toggle('active');

            if (shemeMap.classList.contains('active')) {
              shemeMap.classList.add('vr__map_show');
              toggleText.textContent = 'Скрыть карту';
            } else {
              shemeMap.classList.remove('vr__map_show');
              toggleText.textContent = 'Показать карту';
            }
            break;

          case 'change-point':
            this.handlePoint(clicked, sceneEl);
            break;

          default:
            break;
        }

      });

    });

  }

  update() {

  }

  async handlePoint(target, sceneEl) {
    
    sceneEl.exitVR();
  
    const index = target.dataset.index,
          name = target.dataset.name;
    
    const loading = document.getElementById('loading');
    loading.classList.add('page_overlay');

    sceneEl.classList.remove('scene_show');
    this.controls.classList.remove('controls_show');

    try {

      const data = await getDataFromName(name);
      const points = await awaitPoints(document.getElementById('vr-map'));
      const videoEl = sceneEl.querySelector('video');

      console.log(data, points, videoEl);

      setData(data).then(async () => {
        videoEl.setAttribute('src', data.video);
        sceneEl.setAttribute('data-index', index);
  
        points.forEach(point => {
          point.classList.remove('current');
  
          if (point.dataset.index === index) {
            point.classList.add('current');
          }
        });
  
        resetSceneComponents(sceneEl).then(() => {
          videoEl.play();
  
          videoEl.addEventListener('canplay', () => {
            setTimeout(() => {
              this.updateOpenMap(sceneEl).then(() => {
                sceneEl.classList.add('scene_show');
                loading.classList.remove('page_overlay');
                sceneEl.enterVR();
              });
            }, 2000);
          });
        });
      });


    } catch(e) {
      throw new Error(e.message);
    }

  }

  async updateOpenMap(scene) {
    return new Promise(resolve => {

      awaitPoints(scene, 1, '[open-map]').then(elems => {

        Array.from(elems).forEach(el => {
          const button = el.querySelector('button'),
                buttonText = el.querySelector('[data-vr="toggle-text"]');

          button.classList.remove('focushack', 'hoverhack');
          buttonText.classList.remove('focushack', 'hoverhack');
          buttonText.textContent = 'Показать карту';

          el.classList.remove('focushack', 'active', 'hoverhack');
          el.flushToDOM();

        });

        const shemeMap = scene.querySelector('[data-vr="vr-map"]');
        shemeMap.classList.remove('vr__map_show');

        updateComponentsChild(scene, 'true').then(() => {
          resolve();
        });

      });

    });
  }

}
