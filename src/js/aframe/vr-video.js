export class vrVideo {

  constructor() {
    this.isMobile = window.innerWidth < 1280;
    this.controlsEl = document.querySelector('[data-js="controls"]');
  }

  created(videoSrc) {

    return new Promise(resolve => {

      const videoEl = document.createElement('video');

      videoEl.setAttribute('id', 'video');
      videoEl.setAttribute('preload', 'auto');
      videoEl.setAttribute('src', videoSrc);
      videoEl.setAttribute('muted', 'muted');
      videoEl.setAttribute('loop', 'true');
      videoEl.setAttribute('crossOrigin', 'anonymous');

      const videosphere = document.createElement('a-videosphere');

      videosphere.setAttribute('rotation', '0 -90 0');
      videosphere.setAttribute('src', '#video');
      videosphere.setAttribute('visible', 'false');
      videosphere.setAttribute('video', 'video');
      videosphere.setAttribute('static-body', '');

      setTimeout(() => {
        resolve({
          'videoEl': videoEl,
          'videosphere': videosphere
        })
      }, 500)

    })
  }

  init() {

    AFRAME.registerComponent('video', {
      init: function () {
        this.onPlay = this.onPlay.bind(this);
      },
      update: function () {

      },
      remove: function () {

      },
      pause: function () {

      },
      play: function () {
        this.el.addEventListener("loaded", () => {
          this.onPlay();
        });
      },
      onPlay() {
        const videoEl = this.el.getAttribute('material').src;
        if (!videoEl) {
          return;
        }
        this.el.object3D.visible = true;
        videoEl.play()
      }
    });
  }

  update() {

  }

}