import { onDomIsRendered, vrCompomentVisible } from "../utils";
import VrComponent from '../classes/VrComponent';

export class openHelp extends VrComponent {

  constructor() {
    super();
    this.helpWidget = null;
    this.textListener = null;
    this.hoverData = null;
    this.controllerData = null;
  }

  created() {
    return new Promise(resolve => {

      const helpEntity = document.createElement('a-entity');

      helpEntity.setAttribute('htmlembed', '');
      helpEntity.setAttribute('look-at', '#camera');
      helpEntity.setAttribute('position', {x: -2, y: 1.6, z: -1.6});
      helpEntity.setAttribute('data-raycastable', '');
      helpEntity.setAttribute('raycaster-target', '');
      helpEntity.setAttribute('open-help', '');
      helpEntity.setAttribute('visible', 'false');
      helpEntity.setAttribute('vr-mode-watcher', '');
      helpEntity.setAttribute('class', 'clickable');
      helpEntity.setAttribute('target', 'open-help');
      helpEntity.setAttribute('animation__fusing', {
        'property': 'scale',
        'startEvents': 'fusing',
        'easing': 'easeInCubic',
        'dur': 2000,
        'from': '1 1 1',
        'to': '0.5 0.5 0.5'
      }, true);

      helpEntity.setAttribute('animation__mouseleave', {
        'property': 'scale',
        'startEvents': 'mouseleave',
        'easing': 'easeInCubic',
        'dur': 500,
        'to': '1 1 1'
      }, true);

      const helpEntityBtn = document.createElement('button');
      helpEntityBtn.setAttribute('type', 'button');
      helpEntityBtn.classList.add('controls__button', 'controls__button_help', 'button');
      helpEntityBtn.insertAdjacentHTML('afterbegin', `<svg class="controls__button-help controls__button-ico" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.9062 6.58359C17.5781 5.86641 17.1117 5.22188 16.5164 4.67109C15.307 3.54844 13.7016 2.92969 12 2.92969C10.2984 2.92969 8.69297 3.54844 7.48359 4.66875C6.88828 5.22187 6.42188 5.86406 6.09375 6.58359C5.75156 7.33359 5.57812 8.12812 5.57812 8.94844V9.58125C5.57812 9.72656 5.69531 9.84375 5.84062 9.84375H7.10625C7.25156 9.84375 7.36875 9.72656 7.36875 9.58125V8.94844C7.36875 6.61641 9.44531 4.72031 12 4.72031C14.5547 4.72031 16.6312 6.61641 16.6312 8.94844C16.6312 9.90469 16.2914 10.8047 15.6469 11.5547C15.0094 12.2977 14.1094 12.8297 13.1133 13.0547C12.5437 13.1836 12.0305 13.5047 11.6672 13.9641C11.3052 14.4219 11.1079 14.9882 11.107 15.5719V16.3078C11.107 16.4531 11.2242 16.5703 11.3695 16.5703H12.6352C12.7805 16.5703 12.8977 16.4531 12.8977 16.3078V15.5719C12.8977 15.2039 13.1531 14.8805 13.507 14.8008C14.8758 14.4914 16.118 13.7531 17.0062 12.7219C17.4539 12.1992 17.8031 11.618 18.0445 10.9875C18.2953 10.3336 18.4219 9.64687 18.4219 8.94844C18.4219 8.12812 18.2484 7.33125 17.9062 6.58359ZM12 18.4453C11.2758 18.4453 10.6875 19.0336 10.6875 19.7578C10.6875 20.482 11.2758 21.0703 12 21.0703C12.7242 21.0703 13.3125 20.482 13.3125 19.7578C13.3125 19.0336 12.7242 18.4453 12 18.4453Z" fill="white"/>
                                                      </svg>`);
      helpEntity.append(helpEntityBtn);

      resolve(helpEntity);
    });
  }

  init() {
    const self = this;

    AFRAME.registerComponent("open-help", {
      schema: {
        'target': {type: 'selector'},
      },
      init: function() {
        vrCompomentVisible(this.el);

        this.el.sceneEl.addEventListener('change-mode', async (e) => {
          if (e.detail.enterVr && !self.helpWidget) {
            self.enterVR(this.el, this.el.sceneEl);
          }
        });

      },
      tick: function() {

      }
    });
  }

  enterVR(parentEl, sceneEl) {
    this.textListener = sceneEl.querySelector('[content-listener]');

    if (!this.textListener) {
      return;
    }

    this.helpWidget = this.textListener.querySelector('[data-scene="content-help"]');
  }

  raycasterHandle(parentEl) {
    parentEl.addEventListener('raycaster-intersected', () => {

      this.timerId = setTimeout(() => {
        this.textListener.setAttribute('position', {x: -2, y: 1.6, z: -1.5});
        this.helpWidget.classList.add('scene__modal-content_show');
      }, 1500);

    });

    parentEl.addEventListener('raycaster-intersected-cleared', () => {
      clearTimeout(this.timerId);
    });
  }

  update() {

  }
}