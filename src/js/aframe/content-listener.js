import { helpSheme } from '@components/content';
import { vrCompomentVisible } from '../utils';
import VrComponent from '../classes/VrComponent';

export class contentListener extends VrComponent  {

  constructor() {
    super();
    this.modals = null;
    this.timerId = null;
    this.items = [
      {
        'classes': '',
        'attr': {'data-scene': 'content-info', 'data-scene-modal': ''},
        'html': `<div class="scene__modal-title" data-js-modal="title"></div>
                  <div class="scene__modal-wrap">
                    <div class="scene__modal-scroll">
                      <div class="scene__modal-body" data-js-modal="info"></div>
                    </div>
                 </div>`
      },
      {
        'classes': 'scene__modal-content_help',
        'attr': {'data-scene': 'content-help', 'data-scene-modal': ''},
        'html': `<div class="scene__modal-title">Помощь</div>
                  <div class="scene__modal-wrap">${helpSheme()}</div>`
      },
      {
        'classes': '',
        'attr': {'data-scene': 'content-return', 'data-scene-modal': ''},
        'html': `<div class="popup__title popup__title_offset">
                  Вы уверены, что хотите вернуться на поверхность?
                </div>
                <div class="popup__footer">
                  <button type="button" class="button button_blue popup__button clickable" data-vr="return" target="return">
                    Да, вернуться на поверхность
                  </button>
                  <button type="button" class="button button_white popup__button" data-scene="close-info" target="close-modal">
                    Нет, остаться в шахте
                  </button>
                </div>`
      },
    ]
  }

  created() {
    return new Promise(resolve => {

      const contentEntity = document.createElement('a-entity');

      contentEntity.setAttribute('htmlembed', '');
      contentEntity.setAttribute('look-at', '#camera');
      contentEntity.setAttribute('position', {x: 0.0001, y: 1.5, z: -1.5});
      contentEntity.setAttribute('data-raycastable', '');
      contentEntity.setAttribute('content-listener', '');
      contentEntity.setAttribute('id', 'vr-content');
      contentEntity.setAttribute('vr-mode-watcher', '');
      contentEntity.setAttribute('visible', '');
      contentEntity.setAttribute('class', 'clickable');


      const modals = this.createModals()
      contentEntity.append(modals);

      resolve(contentEntity);
    })

  }

  init() {
    const self = this;

    AFRAME.registerComponent('content-listener', {
      schema: {
        dataEl: {type: 'selector'},
      },
      init: function() {
        vrCompomentVisible(this.el);

        this.el.sceneEl.addEventListener('change-mode', async (e) => {
          if (e.detail.enterVr && !self.modals) {
            self.enterVR(this.el);
          }
        });

      },
      update: function() {
        vrCompomentVisible(this.el);
      }
    })
  }

  enterVR(parentEl) {
    this.modals = parentEl.querySelectorAll('[data-scene-modal]');
  }

  closeModals() {
    this.modals.forEach(modal => modal.classList.remove('scene__modal-content_show'));
  }

  getShemeModal() {
    return Array.from(this.modals).find(modal => modal.dataset.scene === 'content-map');
  }

  createModals() {
    const modal = document.createElement('div');
    modal.classList.add('scene__modal');

    this.items.forEach(item => {
      const content = document.createElement('div');
      content.classList.add('scene__modal-content');

      if (item.classes) {
        content.classList.add(item.classes);
      }

      Object.keys(item.attr).forEach(key => {
        content.setAttribute(key, item.attr[key])
      });

      content.insertAdjacentHTML('afterbegin', `<button type="button" class="button scene__modal-close clickable" data-scene="close-info" target="close-modal">
                                                  <svg class="scene__modal-cross" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.15984 1L8.83984 9" stroke="currentColor" stroke-width="1.5"/>
                                                    <path d="M9 1.15997L1 8.83996" stroke="currentColor" stroke-width="1.5"/>
                                                  </svg>
                                                </button>`);
      content.insertAdjacentHTML('beforeend', item.html);
      modal.append(content)
    })

    return modal;

  }

  update() {
    
  }

  raycasterHandle(parentEl) {
    const closeEl = parentEl.querySelectorAll('[data-scene="close-info"]');

    closeEl.forEach(close => {

      close.addEventListener('mouseenter', () => {
        this.timerId = setTimeout(() => {
          this.closeModals();
        }, 1000);
      });

      close.addEventListener('mouseleave', () => {
        clearTimeout(this.timerId);
      });
    });

    parentEl.addEventListener('raycaster-intersected-cleared', () => {
      this.closeModals();
    });

    const returnEl = parentEl.querySelector('[data-vr="return"]');

    returnEl.addEventListener('mouseenter', () => {
      this.timerId = setTimeout(() => {
        this.returnInSheme(parentEl.sceneEl)
      }, 1500);
    });

    returnEl.addEventListener('mouseleave', () => {
      clearTimeout(this.timerId);
    });
  }

  returnInSheme(scene) {
    const toggleVr = document.querySelector('[data-js-action="toggle-vr"]'),
          controls = document.querySelector('[data-js="controls"]');

    this.closeModals();

    if (AFRAME.utils.device.isIOS()) {
      scene.exitVR();
    } else {
      toggleVr.click();
    }

    controls.classList.remove('controls_show');
    scene.classList.remove('scene_show');

    window.location.href = 'https://gremgok.ru/';

    // controls.classList.remove('controls_show');
    // scene.classList.remove('scene_show');

    // setTimeout(() => {
    //   pages.anchors = pages.anchors.filter(anchors => anchors !== "#loading");
    //   pages.pages = pages.pages.filter(page => page !== loading);
    //   pages.prev();

    //   window.location.reload();
    // }, 1500)

  }
}
