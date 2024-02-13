import VrComponent from '../classes/VrComponent';
import { vrCompomentVisible } from '../utils';

export class oculusLeftControl extends VrComponent {

    constructor() {
        super();
        
        this.infoWidget = null;
        this.textListener = null;
    }
  
    created() {
        return new Promise(resolve => {

            const control = document.createElement('a-entity');

            control.setAttribute('oculus-touch-controls', 'hand: left');
            control.setAttribute('left-control-listener', '');

            resolve(control);
        });
    }
  
    init() {
        const self = this;

        AFRAME.registerComponent("left-control-listener", {
            init: function() {
                vrCompomentVisible(this.el);
                
                this.el.addEventListener('bbuttondown', this.triggerDownHandle);
            },
            triggerDownHandle: function (evt) {
                const target = evt.target;

                if (target && target.getAttribute('target')) {
                    const type = target.getAttribute('target');

                    switch (type) {
                        case 'open-info':

                            const textListener = evt.detail.sceneEl.querySelector('[content-listener]');

                            if (textListener) {
                              break;
                            }
                        
                            const infoWidget = textListener.querySelector('[data-scene="content-info"]');
                            textListener.setAttribute('position', {x: 0.0001, y: 1.8, z: -2.8});
                            infoWidget.classList.add('scene__modal-content_show');
                            break;
                    
                        default:
                            break;
                    }
                }
                
            }
        });
    }
  
    update() {}
}