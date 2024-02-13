import { vrCompomentVisible } from "../utils";
import VrComponent from '../classes/VrComponent';

export class openMap extends VrComponent {

  constructor() {
    super();
    this.shemeMap = null;
    this.hoverData = null;
    this.controllerData = null;
  }

  created() {
    return new Promise(resolve => {

      const mapEntity = document.createElement('a-entity');

      mapEntity.setAttribute('htmlembed', '');
      mapEntity.setAttribute('look-at', '#camera');
      mapEntity.setAttribute('position', {x: 2, y: 1.6, z: -2});
      mapEntity.setAttribute('raycaster-target', '');
      mapEntity.setAttribute('data-raycastable', '');
      mapEntity.setAttribute('open-map', '');
      mapEntity.setAttribute('visible', 'false');
      mapEntity.setAttribute('vr-mode-watcher', '');
      mapEntity.setAttribute('class', 'clickable');
      mapEntity.setAttribute('target', 'show-map');
      mapEntity.setAttribute('animation__fusing', {
        'property': 'scale',
        'startEvents': 'fusing',
        'easing': 'easeInCubic',
        'dur': 2000,
        'from': '1 1 1',
        'to': '0.5 0.5 0.5'
      }, true);

      mapEntity.setAttribute('animation__mouseleave', {
        'property': 'scale',
        'startEvents': 'mouseleave',
        'easing': 'easeInCubic',
        'dur': 500,
        'to': '1 1 1'
      }, true);

      const mapEntityBtn = document.createElement('button');
      mapEntityBtn.setAttribute('type', 'button');
      mapEntityBtn.classList.add('vr__toggle');
      mapEntityBtn.insertAdjacentHTML('afterbegin', `<div class="vr__toggle-circle">
                                                      <svg class="vr__toggle-ico" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 8V22V22.5M1 8V22.5M1 8L8.5 4.5M1 22.5L8.5 19.5M8.5 4.5V7.5M8.5 4.5L13 7M8.5 9V11.5M8.5 13.5V16M8.5 17.5V19.5M8.5 19.5L15.5 23M15.5 23V21V20.5M15.5 23L23 20.5V12M15.5 19V16.5M15.5 14.5V12M19 1.5L14.5 10H24L19 1.5Z" stroke="white"/>
                                                      </svg>
                                                    </div>
                                                    <div class="vr__toggle-text" data-vr="toggle-text">
                                                      Показать карту
                                                    </div>`);
      mapEntity.append(mapEntityBtn);

      resolve(mapEntity);
    })
  }

  init() {
    const self = this;

    AFRAME.registerComponent('open-map', {
      schema: {
        'target': {type: 'selector'},
      },
      init: function() {

        this.el.addEventListener('loaded', () => {

          vrCompomentVisible(this.el);

          this.el.sceneEl.addEventListener('change-mode', async (e) => {

            if (e.detail.enterVr && !self.shemeMap) {
              self.enterVR(this.el, this.el.sceneEl);
            }
          });
        });

      }
    });
  }

  enterVR(parentEl, sceneEl) {
    this.shemeMap = sceneEl.querySelector('[data-vr="vr-map"]');

    if (!this.shemeMap) {
      return;
    }
  }

  raycasterHandle(parentEl) {
    const toggleText = parentEl.querySelector('[data-vr="toggle-text"]');

    parentEl.addEventListener('raycaster-intersected', () => {

      this.timerId = setTimeout(() => {
        parentEl.classList.toggle('active');

        if (parentEl.classList.contains('active')) {
          this.shemeMap.classList.add('vr__map_show');
          toggleText.textContent = 'Скрыть карту';
        } else {
          this.shemeMap.classList.remove('vr__map_show');
          toggleText.textContent = 'Показать карту';
        }

      }, 1500);

    });

    parentEl.addEventListener('raycaster-intersected-cleared', () => {
      clearTimeout(this.timerId);
    });
  }

  update() {

  }

}
