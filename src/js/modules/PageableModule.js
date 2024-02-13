import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
require('pagepiling.js');

export class PageableModule {
  constructor(el) {
    this.el = el;
    this.pageable = null;
    this.create();
  }

  create() {
    $(this.el).pagepiling({
      menu: null,
      direction: 'vertical',
      verticalCentered: true,
      sectionsColor: [],
      anchors: ['intro', 'info', 'select', 'loading'],
      scrollingSpeed: 700,
      easing: 'linear',
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: false,
      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: '.pagepiling',
      animateAnchor: false,
      //events
      onLeave: function(index, nextIndex, direction){
        
      },
      afterLoad: function(anchorLink, index){
        
      },
      afterRender: () => {
        this.pageable = $.fn.pagepiling;
      },
    });
  }

  init(cb) {
    cb();
  }

  get pages() {
    return this.pageable;
  }

}