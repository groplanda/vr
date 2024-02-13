import { vrCompomentVisible } from "../utils";
import VrComponent from '../classes/VrComponent';

export class openLift extends VrComponent {

  constructor() {
    super();
    this.liftWidget = null;
    this.textListener = null;
    this.hoverData = null;
    this.controllerData = null;
  }

  created() {
    return new Promise(resolve => {

      const liftEntity = document.createElement('a-entity');

      liftEntity.setAttribute('htmlembed', '');
      liftEntity.setAttribute('look-at', '#camera');
      liftEntity.setAttribute('position', {x: -3, y: 1.5, z: -1});
      liftEntity.setAttribute('raycaster-target', '');
      liftEntity.setAttribute('data-raycastable', '');
      liftEntity.setAttribute('open-lift', '');
      liftEntity.setAttribute('visible', 'false');
      liftEntity.setAttribute('vr-mode-watcher', '');
      liftEntity.setAttribute('target', 'open-lift');
      liftEntity.setAttribute('class', 'clickable');
      liftEntity.setAttribute('animation__fusing', {
        'property': 'scale',
        'startEvents': 'fusing',
        'easing': 'easeInCubic',
        'dur': 2000,
        'from': '1 1 1',
        'to': '0.5 0.5 0.5'
      }, true);

      liftEntity.setAttribute('animation__mouseleave', {
        'property': 'scale',
        'startEvents': 'mouseleave',
        'easing': 'easeInCubic',
        'dur': 500,
        'to': '1 1 1'
      }, true);

      const liftEntityBtn = document.createElement('button');
      liftEntityBtn.setAttribute('type', 'button');
      liftEntityBtn.classList.add('controls__button', 'controls__button_return', 'button');
      liftEntityBtn.insertAdjacentHTML('afterbegin', `<svg class="controls__button-lift controls__button-ico" width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <rect x="0.5" y="0.5" width="18.5" height="29" stroke="white"/>
                                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M2 27H9L9 14.25H2L2 27ZM1 14.25H0.75V27H1L1 14.25ZM18.75 27H18.5V14.25H18.75V27ZM10 14.25H17.5V27H10L10 14.25Z" fill="white"/>
                                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 7.5H18C16.3532 5.25824 13.2753 3.75 9.75 3.75C6.22472 3.75 3.14677 5.25824 1.5 7.5Z" fill="white"/>
                                                    </svg>`);
      liftEntity.append(liftEntityBtn);

      resolve(liftEntity);
    })
  }

  init() {
    const self = this;

    AFRAME.registerComponent("open-lift", {
      schema: {
        'target': {type: 'selector'},
      },
      init: function() {

        vrCompomentVisible(this.el);

        this.el.sceneEl.addEventListener('change-mode', async (e) => {
          if (e.detail.enterVr && !self.liftWidget) {
            self.enterVR(this.el, this.el.sceneEl);
          }
        });

      },
    })
  }

  enterVR(parentEl, sceneEl) {
    this.textListener = sceneEl.querySelector('[content-listener]');

    if (!this.textListener) {
      return;
    }

    this.liftWidget = this.textListener.querySelector('[data-scene="content-return"]');
    
  }

  raycasterHandle(parentEl) {
    parentEl.addEventListener('raycaster-intersected', () => {

      this.timerId = setTimeout(() => {
        this.textListener.setAttribute('position', {x: -3, y: 1.5, z: -0.5});
        this.liftWidget.classList.add('scene__modal-content_show');
      }, 1500);
    });

    parentEl.addEventListener('raycaster-intersected-cleared', e => {
      clearTimeout(this.timerId);
    });
  }

  update() {

  }

}
