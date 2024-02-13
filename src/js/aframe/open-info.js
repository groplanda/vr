import { vrCompomentVisible } from "../utils";
import VrComponent from '../classes/VrComponent';

export class openInfo extends VrComponent {

  constructor() {
    super();
    this.infoWidget = null;
    this.textListener = null;
    this.hoverData = null;
    this.controllerData = null;
  }

  created() {
    return new Promise(resolve => {

      const infoEntity = document.createElement('a-entity');

      infoEntity.setAttribute('htmlembed', '');
      infoEntity.setAttribute('look-at', '#camera');
      infoEntity.setAttribute('position', {x: 0.0001, y: 1.6, z: -3});
      infoEntity.setAttribute('data-raycastable', '');
      infoEntity.setAttribute('raycaster-target', '');
      infoEntity.setAttribute('visible', 'false');
      infoEntity.setAttribute('open-info', '');
      infoEntity.setAttribute('vr-mode-watcher', '');
      infoEntity.setAttribute('target', 'open-info');
      infoEntity.setAttribute('class', 'clickable');
      
      infoEntity.setAttribute('animation__fusing', {
        'property': 'scale',
        'startEvents': 'fusing',
        'easing': 'easeInCubic',
        'dur': 2000,
        'from': '1 1 1',
        'to': '0.5 0.5 0.5'
      }, true);

      infoEntity.setAttribute('animation__mouseleave', {
        'property': 'scale',
        'startEvents': 'mouseleave',
        'easing': 'easeInCubic',
        'dur': 500,
        'to': '1 1 1'
      }, true);

      const infoEntityBtn = document.createElement('button');
      infoEntityBtn.setAttribute('type', 'button');
      infoEntityBtn.classList.add('controls__button', 'controls__button_plus', 'button');
      infoEntityBtn.insertAdjacentHTML('afterbegin', `<svg class="controls__button-plus controls__button-ico" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.223703 8.70891L17.5478 9.06247" stroke-width="1.5"/>
                                                        <path d="M9.06257 0.223702L8.70902 17.5478" stroke-width="1.5"/>
                                                      </svg>`);
      infoEntity.append(infoEntityBtn);

      resolve(infoEntity);
    })
  }

  init() {
    const self = this;

    AFRAME.registerComponent("open-info", {
      schema: {
        'target': {type: 'selector'},
      },
      init: function() {
        vrCompomentVisible(this.el);
        
        this.el.sceneEl.addEventListener('change-mode', async (e) => {
          if (e.detail.enterVr && !self.infoWidget) {
            self.enterVR(this.el, this.el.sceneEl);
          }
        });

      },
      update: function (value) {
        console.log('update', value);
      }
    });
  }


  enterVR(parentEl, sceneEl) {
    this.textListener = sceneEl.querySelector('[content-listener]');

    if (!this.textListener) {
      return;
    }

    this.infoWidget = this.textListener.querySelector('[data-scene="content-info"]');
  }

  raycasterHandle(parentEl) {
    parentEl.addEventListener('raycaster-intersected', (e) => {
      this.timerId = setTimeout(() => {
        this.textListener.setAttribute('position', {x: 0.0001, y: 1.8, z: -2.8});
        this.infoWidget.classList.add('scene__modal-content_show');
      }, 1500);
    });

    parentEl.addEventListener('raycaster-intersected-cleared', () => {
      clearTimeout(this.timerId);
    });
  }
  
  update() {

  }
}
