export function debounce(callback, interval) {
  let debounceTimeoutId;

  return function(...args) {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => callback.apply(this, args), interval);
  };
}


export async function awaitPoints(parent, length = 10, selector = '[data-vr="hover-point"]') {
  return new Promise(resolve => {
    function waitUntil() {
      setTimeout(() => {
        const points = parent.querySelectorAll(selector);
        if (points.length >= length) {
          resolve(points);
        } else {
          waitUntil();
        }
      }, 50);
    }
    waitUntil();
  });
}

export async function getDataFromName(key) {
  return new Promise((resolve, reject) => {
    fetch('/data/info.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      const current = findByKey(data, key);
      resolve(data[current]);
    })
    .catch(e => {
      reject(e.message)
    })
  })
}

export async function setData(data) {
  const modalTitle = document.querySelectorAll('[data-js-modal="title"]'),
        modalInfo = document.querySelectorAll('[data-js-modal="info"]');

  return new Promise(resolve => {
    modalTitle.forEach(title => title.textContent = data.title)
    modalInfo.forEach(info => info.innerHTML = data.info);
    resolve(true);
  })
}

function findByKey(data, key) {
  return Object.keys(data).find(row => row === key)
}

export async function setActivePoint(points, currentIndex) {

  return new Promise(resolve => {
    points.forEach(point => {
      point.classList.remove('current');

      if (+point.dataset.index === +currentIndex) {
        point.classList.add('current');
      }
    });
    resolve(currentIndex);
  })

}

export async function resetSceneComponents(scene) {
  return new Promise(resolve => {

    const shemeMap = scene.querySelector('[data-vr="vr-map"]'),
          openMap = scene.sceneEl.querySelector('[open-map]'),
          openMapBtn = openMap.querySelector('button'),
          openMapText = openMap.querySelector('[data-vr="toggle-text"]'),
          modals = scene.sceneEl.querySelectorAll('[data-scene-modal]');

    openMapBtn.classList.remove('active');
    shemeMap.classList.remove('vr__map_show');
    openMapText.textContent = 'Показать карту';
    modals.forEach(modal => modal.classList.remove('scene__modal-content_show'));

    resolve();
  })
}

export function showLoading(loading, fullpage = null) {
  loading.classList.remove('hidden');
  loading.scrollIntoView({
    behavior: 'smooth'
  });

  let scrollTimeout;
  
  addEventListener('scroll', function(e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        loading.classList.add('page_fixed', 'page_overlay');
      }, 100);
  });
}

export function vrCompomentVisible(elem) {
  elem.addEventListener('stateadded', e => {
    const state = e.detail;

    if (state === 'non-vr') {
      elem.setAttribute('visible', 'false');
    }
    if (state === 'vr') {
      elem.setAttribute('visible', 'true');
    }
  })

  elem.addEventListener('stateremoved', e => {
    const state = e.detail;

    if (state === 'non-vr') {
      elem.setAttribute('visible', 'true');
    }
    if (state === 'vr') {
      elem.setAttribute('visible', 'false');
    }
  })
}

export async function updateComponentsChild(scene, visible = 'true') {
  const components = ['open-help', 'open-info', 'open-lift', 'open-map'];
  let index = 0;
  return new Promise(resolve => {
    components.forEach(component => {

      onDomIsRendered(`[${component}]`, scene).then(function(nodeElem) {
        Array.from(nodeElem).forEach(el => {
          index++;
          setTimeout(() => {
            el.setAttribute('visible', visible);
            el.firstElementChild.setAttribute('visible', visible);
          }, index * 100);
        });
      });
    });

    resolve();
  })

}

export function onDomIsRendered (element, parent = document) {
  return new Promise(function(resolve, reject) {
    function waitUntil() {
      setTimeout(function() {
        const domElement = parent.querySelectorAll(element);
        if (domElement.length > 0) {
          resolve(domElement);
        } else {
          waitUntil();
        }
      }, 150);
    }
    waitUntil();
  });
}

export function getCurrentGroups(parents, isMobile) {
  const current = Array.from(parents).find(parent => isMobile ? parent.dataset.type === 'mobile' : parent.dataset.type  === 'desktop')
  return current.querySelectorAll('[data-js="scheme-group"]');
}

export function isAndroidDevice() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

export function removeHash () {
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

export function isCanvas(target) {
  return target.tagName.toLowerCase() === 'canvas';
}

export function isScene() {
  const scene = document.querySelector('a-scene');
  return scene !== null && scene.classList.contains('scene_show');
}

export function observeMapImage() {
  const imageMap = document.querySelector('[data-js="map"]');
  const options = { threshold: .5 };
  const images = {
    mobileMin: '/images/map/map-mobile-min.png',
    mobileFull: '/images/map/mine-mobile.svg',
    desktopMin: '/images/map/map-full-min.png',
    desktopFull: '/images/map/mine-full.svg',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showFullMap();
      } else {
        showMinMap();
      }
    })
  }, options);

  observer.observe(imageMap);

  const showFullMap = () => {
    if (isMobile()) {
      imageMap.src = images.mobileFull;
    } else {
      imageMap.src = images.desktopFull;
    }
  }

  const showMinMap = () => {
    if (isMobile()) {
      imageMap.src = images.mobileMin;
    } else {
      imageMap.src = images.desktopMin;
    }
  }

  const isMobile = () => {
    return window.innerWidth < 768;
  }
}

export function isIOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

