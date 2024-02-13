import { getCurrentGroups, setActivePoint, updateComponentsChild } from "../utils";

export class vrScene {
  constructor(controls, index) {
    this.controls = controls;
    this.index = index;
    this.toggleVrBtn = document.querySelector('[data-js-action="toggle-vr"]');
    this.isIOS = null;
    this.scene = null;
  }

  created() {
    return new Promise(resolve => {

      const sceneEl = document.createElement("a-scene"),
            assetsEl = document.createElement("a-assets");

      sceneEl.classList.add('scene');
      sceneEl.setAttribute('data-index', this.index);
      sceneEl.setAttribute('vr-mode-ui', 'enabled: false');
      sceneEl.setAttribute('data-js', 'scene');
      sceneEl.setAttribute('vr-scene', '');
      sceneEl.setAttribute('position', {x: 0.0001, y: 0.0001, z: 0.0001});

      sceneEl.append(assetsEl);

      setTimeout(() => {
        resolve({
          'scene': sceneEl,
          'assets': assetsEl
        })
      }, 1500)

    })
  }


  init() {
    const self = this;

    AFRAME.registerComponent('vr-scene', {
      init: function () {

        const sceneEl = self.scene = this.el;
        const isMobile = AFRAME.utils.device.isMobile();

        const schemeMaps = document.querySelectorAll('[data-js="scheme-map"]'),
              shemePoints = getCurrentGroups(schemeMaps, isMobile);

        self.isIOS = AFRAME.utils.device.isIOS();

        sceneEl.addEventListener('loaded', () => {

          // toggle vr
          self.toggleVrBtn.addEventListener('click', () => {
            if (self.toggleVrBtn.classList.contains('active-vr')) {
              sceneEl.exitVR();
            } else {
              sceneEl.enterVR();
            }
          })
          self.orientationchangeHandle();
        })

        sceneEl.addEventListener('enter-vr', () => {
          
          self.toggleVrBtn.classList.add('active-vr');

          this.el.emit('change-mode', {
            enterVr: true
          });

          updateComponentsChild(sceneEl, 'true');

        });

        sceneEl.addEventListener('exit-vr', () => {
          self.toggleVrBtn.classList.remove('active-vr');
          const activeIndex = sceneEl.getAttribute('data-index');
          setActivePoint(shemePoints, +activeIndex);
          updateComponentsChild(sceneEl, 'false');
        });


        // sceneEl.addEventListener('componentchanged', e => {
        //   console.log('componentchanged', e);
        // })

        // sceneEl.addEventListener('stateadded', e => {
        //   console.log('stateadded', e);
        // })

        // sceneEl.addEventListener('deviceorientationpermissiongranted', e => {
        //   console.log('deviceorientationpermissiongranted', e);
        // })

        // sceneEl.addEventListener('deviceorientationpermissionrejected', e => {
        //   console.log('deviceorientationpermissionrejected', e);
        // })

        // sceneEl.addEventListener('deviceorientationpermissionrequested', e => {
        //   console.log('deviceorientationpermissionrequested', e);
        // })

        // sceneEl.addEventListener('child-attached', e => {
        //   console.log('child-attached', e);
        // })

        // sceneEl.addEventListener('renderstart', e => {
        //   console.log('renderstart', e);
        // })

        // sceneEl.addEventListener('componentinitialized', e => {

        // })

        // console.log('utils', AFRAME.utils.device);
        // console.log('isIOS', AFRAME.utils.device.isIOS());
        // console.log('isLandscape', AFRAME.utils.device.isLandscape());
        // console.log('isMobile', AFRAME.utils.device.isMobile());
        // console.log('isMobileDeviceRequestingDesktopSite', AFRAME.utils.device.isMobileDeviceRequestingDesktopSite());
        // console.log('isMobileVR', AFRAME.utils.device.isMobileVR());
      }
    });
  }

  update() {

  }

  delayClick() {
    return new Promise(resolve => {
      this.toggleVrBtn.click()

      setTimeout(() => {
        resolve();
      }, 500);
    })
  }

  orientationchangeHandle() {
    window.addEventListener('orientationchange', () => {

      if (!this.scene.hasLoaded) {
        return;
      }

      this.delayClick().then(() => {
        const isLandscape = AFRAME.utils.device.isLandscape();

        if (isLandscape) {
          this.scene.style.zIndex = 1030;
          this.controls.classList.remove('controls_show');
        } else {
          this.fixHeight();
          this.scene.style.zIndex = '';
          this.controls.classList.add('controls_show');
        }
      })

    })
  }

  fixHeight() {
    setTimeout(() => {
      document.documentElement.style.height = '100%';
      window.scrollTo(0, 1);
    }, 500)
  }
}

// checkARSupport: ƒ checkARSupport()
// checkHeadsetConnected: ƒ checkHeadsetConnected()
// getVRDisplay: ƒ getVRDisplay()
// isBrowserEnvironment: true
// isFirefoxReality: ƒ isFirefoxReality()
// isGearVR: ƒ ()
// isIOS: ƒ isIOS()
// isLandscape: ƒ ()
// isMobile: ƒ ()
// isMobileDeviceRequestingDesktopSite: ƒ isMobileDeviceRequestingDesktopSite()
// isMobileVR: ƒ isMobileVR()
// isNodeEnvironment: false
// isOculusBrowser: ƒ isOculusBrowser()
// isOculusGo: ƒ ()
// isR7: ƒ isR7()
// isTablet: ƒ isTablet(mockUserAgent)
// isWebXRAvailable: true