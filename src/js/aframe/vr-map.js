import { mapSheme } from '@components/content';
import VrComponent from '../classes/VrComponent';
import { awaitPoints, 
        getDataFromName, 
        setData, 
        resetSceneComponents, 
        vrCompomentVisible, 
        updateComponentsChild 
      } from '../utils';

export class vrMap extends VrComponent {

  constructor() {
    super();
    this.toggleVrBtn = document.querySelector('[data-js-action="toggle-vr"]');
    this.controls = document.querySelector('[data-js="controls"]');
    this.points = false;
  }

  created() {

    return new Promise((resolve) => {
      const vrMap = document.createElement('a-entity');

      vrMap.setAttribute('htmlembed', '');
      vrMap.setAttribute('look-at', '#camera');
      vrMap.setAttribute('position', {x: 2, y: 1, z: 1});
      vrMap.setAttribute('data-raycastable', '');
      vrMap.setAttribute('raycaster-target', '');
      vrMap.setAttribute('vr-map', '');
      vrMap.setAttribute('id', 'vr-map');
      vrMap.setAttribute('vr-mode-watcher', '');
      vrMap.setAttribute('visible', '');
      vrMap.setAttribute('class', 'clickable');
      vrMap.setAttribute('target', 'change-level');

      const vrMapEl = document.createElement('div');

      vrMapEl.classList.add('vr__map');
      vrMapEl.setAttribute('data-vr', 'vr-map');
      vrMapEl.insertAdjacentHTML('afterbegin', mapSheme());
      vrMap.append(vrMapEl);

      resolve(vrMap);

    })
  }

  init() {
    const self = this;

    AFRAME.registerComponent('vr-map', {
       init: function () {

        vrCompomentVisible(this.el);

        this.el.sceneEl.addEventListener('change-mode', async (e) => {
          if (e.detail.enterVr && !self.points) {
            self.enterVR(this.el, this.el.sceneEl);
          }
        });

      },
      update: function () {},
    });
  }

  async enterVR(parentEl, sceneEl) {
    this.points = await awaitPoints(parentEl);

    const currentIndex = sceneEl.getAttribute('data-index');


    this.points.forEach(point => {

      if (point.dataset.index === currentIndex) {
        point.classList.add('current');
      }

    });
  }

  async handlePoint(target, currentIndex, el, points) {
    const index = target.dataset.index,
            name = target.dataset.name;

    if (currentIndex == index) {
      return;
    }

    try {
      this.toggleVrBtn.click();
      el.sceneEl.classList.remove('scene_show');
      this.controls.classList.remove('controls_show');

      const data = await getDataFromName(name);
      const videoEl = el.sceneEl.querySelector('video');

      setData(data).then(async () => {
        console.log(data);
        videoEl.setAttribute('src', data.video);
        el.sceneEl.setAttribute('data-index', index);

        points.forEach(point => {
          point.classList.remove('current');

          if (point.dataset.index === index) {
            point.classList.add('current');
          }
        });

        resetSceneComponents(el).then(() => {
          videoEl.play();
          this.toggleVrBtn.click();

          videoEl.addEventListener('canplay', () => {
            setTimeout(() => {
              this.updateOpenMap(el.sceneEl).then(() => {
                el.sceneEl.classList.add('scene_show');
              })
            }, 2000)
          });

        })

      })

    } catch(e) {
      throw new Error(e);
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
          resolve()
        })

      })

    })
  }

  handleReturn(scene) {
    const textListener = scene.querySelector('[content-listener]');

    if (!textListener) {
      return;
    }

    const liftWidget = textListener.querySelector('[data-scene="content-return"]');

    this.updateOpenMap(scene).then(() => {
      textListener.setAttribute('position', {x: 2, y: 1, z: 1});
      liftWidget.classList.add('scene__modal-content_show');
    })

  }

  raycasterHandle() {

    this.points.forEach(point => {

      point.addEventListener('mouseenter', (e) => {
        this.timerId = setTimeout(() => {
          this.handlePoint(e.target, currentIndex, parentEl, this.points);
        }, 1500);
      })

      point.addEventListener('mouseleave', () => {
        clearTimeout(this.timerId);
      })

    });

    const returnBtn = parentEl.querySelector('[data-vr="return"]');

    returnBtn.addEventListener('mouseenter', () => {
      this.timerId = setTimeout(() => this.handleReturn(parentEl.sceneEl), 1500);
    });

    returnBtn.addEventListener('mouseleave', () => {
      clearTimeout(this.timerId);
    });
  }

  update() {}
}