require('aframe');
require('aframe-event-set-component');
require('aframe-environment-component');
require('aframe-look-at-component');
require('aframe-mobile-controls');
require('aframe-htmlembed-component');
require('aframe-vr-mode-watcher');
require('aframe-htmltexture-component');
//equire('aframe-draw-component');
//require('aframe-physics-extras');
//require('aframe-svg-extruder');


import { Modal } from './modules/Modal';
import { ToggleMap } from './modules/ToggleMap';
import {
    showLoading,
    setData,
    getDataFromName,
    setActivePoint,
    getCurrentGroups,
    isAndroidDevice,
    removeHash,
    isScene,
    isCanvas,
    observeMapImage,
    isIOS, 
    onDomIsRendered} from './utils';
import { vrScene } from './aframe/vr-scene';
import { vrCamera } from './aframe/vr-camera';
import { openLift } from './aframe/open-lift';
import { openInfo } from './aframe/open-info';
import { contentListener } from './aframe/content-listener';
import { openHelp } from './aframe/open-help';
import { openMap } from './aframe/open-map';
import { vrVideo } from './aframe/vr-video';
import { vrMap } from './aframe/vr-map';
import { PageableModule } from './modules/PageableModule';
import '../scss/index.scss';

const iosInnerHeight = require('ios-inner-height');

document.addEventListener("DOMContentLoaded", () => {

  const readyScripts = () => {
    return new Promise((resolve) => {
      const modal = new Modal('vr-popup');

      const loading = document.querySelector('#loading'),
            controls = document.querySelector('[data-js="controls"]'),
            centerControl = controls.querySelector('[data-js="controls-center"]'),
            isMobile = window.innerWidth < 1280,
            schemeMaps = document.querySelectorAll('[data-js="scheme-map"]'),
            shemePoints = getCurrentGroups(schemeMaps, isMobile),
            placeholder = document.getElementById('placeholder'),
            backInMap = document.querySelectorAll('[data-js="back-map"]'),
            RELOAD_KEY = 'isReload',
            isReload = localStorage.getItem(RELOAD_KEY);

      new ToggleMap();

      toggleMenu();

      observeMapImage();

      let components = [];

      pageableHandle();

      function pageableHandle() {
        schemeMaps.forEach(scheme => {
          scheme.addEventListener("click", e => {
            selectLevel(e);
          });
        });
      }

      function toggleMenu() {
        const trigger = document.querySelector('[data-js-action="menu-toggle"]');
        const menu = document.querySelector('[data-js-action="menu-nav"]');

        if (!trigger || !menu) return;

        trigger.addEventListener('click', (e) => {
          trigger.classList.toggle('nav-btn--pressed');

          menu.classList.remove('nav--active');

          if (trigger.classList.contains('nav-btn--pressed')) {
            menu.classList.add('nav--active');
          }

        });

        document.addEventListener('click', (e) => {
          const target = e.target;
          
          if (
            menu.classList.contains('nav--active') 
            && !target.closest('[data-js-action="menu-nav"]') 
            && !target.closest('[data-js-action="menu-toggle"]')) 
          {
            trigger.click();
          }
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && menu.classList.contains('nav--active')) {
            const isNotCombinedKey = !(e.ctrlKey || e.altKey || e.shiftKey);
            
            if (isNotCombinedKey) {
              trigger.click();
            }
          }
        });


      }

      function selectLevel(e) {
        const target = e.target;

        const sceneEl = document.querySelector('a-scene');

        if (target && target.dataset.js === "scheme-point") {
          const name = target.dataset.name,
                selectedIndex = target.dataset.index;

          modal.closeModal();

          setTimeout(async () => {

            if (!sceneEl) {
              showLoading(loading);
            } else {
              sceneEl.classList.remove('scene_show');
              controls.classList.remove('controls_show');
            }
  
            try {
              const data = await getDataFromName(name);

  
              if (!sceneEl) { // if first load
  
                const vrscene = new vrScene(controls, data.index); // create scene
                
                vrscene.created().then(sceneRes => {
                  const {scene, assets} = sceneRes;
                  document.body.insertBefore(scene, document.body.firstElementChild);
                  vrscene.init(); // init scene

                  onDomIsRendered('a-scene').then(() => {

                    initComponents(scene).then(() => {

                      const vrvideo = new vrVideo(); // create video
  
                      vrvideo.created(data.video).then(videoRes => {
      
                        const {videoEl, videosphere} = videoRes;
      
                        assets.append(videoEl);
                        scene.append(videosphere);
    
                        vrvideo.init(); // init video

                        setRotation(videosphere, data.rotation);

                        setActivePoint(shemePoints, data.index).then(() => {

                          startFirstLoadVideo(videoEl).then(() => {
                            initModals(scene).then(() => {
                              setData(data).then(() => {
                                loading.classList.remove('page_overlay');
                                modal.openModal('help');
                                scene.classList.add('scene_show');
                                controls.classList.add('controls_show');
                              });
                            });
                          });
                          
                        });
                        
                      });

                    });

                  });

                });
  
              } else {
                if (+selectedIndex !== +sceneEl.dataset.index) {
                  loading.classList.add('page_overlay');
                  const videoEl = sceneEl.querySelector('video'),
                        videosphereEl = sceneEl.querySelector('a-videosphere');
  
                  videoEl.setAttribute('src', data.video);
                  videoEl.load();
  
                  setRotation(videosphereEl, data.rotation);
  
                  components.forEach(component => component.update());
  
                  setActivePoint(shemePoints, data.index).then(() => {
                    setData(data).then(() => {
                      playVideo(videoEl, sceneEl, controls, selectedIndex);
                      loading.classList.remove('page_overlay');
                    });
                  });
  
                }
              }
  
            } catch(e) {
              console.log(e);
              throw new Error(e.message);
            }

          }, 500);
        }
      }

      function startFirstLoadVideo(videoEl) {

        return new Promise((resolve) => {
          if (isAndroidDevice()) {
            videoEl.play();
          }

          let firedVideo = false;

          videoEl.addEventListener('canplay', () => {
            if (!firedVideo) {
              firedVideo = true;
              removeHash();
              resolve();
            }
          });
        });
      
      }


      function playVideo(videoEl, scene, controls, index) {

        videoEl.play();

        videoEl.addEventListener('canplay', () => {
          scene.classList.add('scene_show');
          scene.setAttribute('data-index', index);
          controls.classList.add('controls_show');
          removeHash();
        });
      }

      function initComponents(scene) {

        const names = [openInfo, openHelp, openMap, openLift, vrCamera];

        return new Promise(resolve => {
          names.forEach(name => {
            const entityClass = new name();
            components.push(entityClass);
            entityClass
              .created()
              .then(elem => {
                scene.append(elem);
                entityClass.init();
              })
          });

          resolve();
        });

      }

      function initModals(scene) {
        const names = [vrMap, contentListener];
        
        return new Promise(resolve => {
          names.forEach(name => {
            const entityClass = new name();
            components.push(entityClass);
            entityClass
              .created()
              .then(elem => {
                scene.append(elem);
                entityClass.init();
              })
          });

          resolve();
        });
      }

      function setRotation(videosphere, rotation) {
        videosphere.setAttribute('rotation', rotation);
      }

      function leaveScene(trigger, controls, pageable, modal) {
        if (!trigger) return;


        trigger.addEventListener("click", function() {
          localStorage.setItem(RELOAD_KEY, 1);
          window.location.reload();
        })
      }

      document.addEventListener("mousedown", e => {
        const target = e.target;
        if (target && isCanvas(target)) {
          centerControl.classList.add("controls__group_hidden");
        }
      })

      document.addEventListener("mouseup", e => {
        const target = e.target;
        if (target && isCanvas(target)) {
          centerControl.classList.remove("controls__group_hidden");
        }
      })

      //const pageData = pageable.pages.data;
      const deviceHeight = iosInnerHeight();

      
      const appHeight = () => {
        const ppTableCell = document.querySelectorAll('[data-menuanchor]');
        ppTableCell.forEach(cell => {
          cell.style.height = `${deviceHeight}px`;
        });
      };

      window.addEventListener("orientationchange", () => {

        if (!isScene()) {
          if ( window.orientation == 0 || window.orientation == 180) {
            placeholder.classList.add('preloader_hide');
            appHeight();
            // WHEN IN PORTRAIT MODE
          } else {
            placeholder.classList.remove('preloader_hide');
            // WHEN IN LANDSCAPE MODE
          }
        }

      }, false);

      if (isReload) {
        pageable.pages.moveTo('select');
        localStorage.removeItem(RELOAD_KEY);
        setTimeout(resolve, 1500);
      } else {
        resolve();
      }
    });
  }

  readyScripts()
  .then(() => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.classList.add("preloader_hide");
  });
});


