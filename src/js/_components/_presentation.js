/* global VERIOUS, $, window */


((VERIOUS, $) => {
  /**
   * Module displaying and controlling slides.
   * @module vsPresentation
   */
  VERIOUS.Modules.vsPresentation = { // eslint-disable-line
    // /**
    //  * Go to previous slide.
    //  * @param {object} config
    //  * @return {undefined}
    //  */
    // previousSlide: function previousSlide(w, index) {
    //   const windowHeight = w.height();
    //   let position = (index - 1) * windowHeight;
    //   if (position < 0) {
    //     position = 0;
    //   }
    //   w.scrollTop(position);
    // },
    //
    // /**
    //  * Go to next slide.
    //  * @param {object} config
    //  * @return {undefined}
    //  */
    // nextSlide: function nextSlide(w, index, slideHeight) {
    //   w.scrollTop((index + 1) * slideHeight);
    // },

    centerSlide: function centerSlide(w, windowHeight, index, slideHeight) {
      console.log(index);
      const padding = (slideHeight - windowHeight) / 2;
      const newScrollTop = (index * slideHeight) + padding;
      w.scrollTop(newScrollTop);
    },

    /**
     * Initiate keys.
     * @param {object} config
     * @return {undefined}
     */
    initKeys: function initKeys(config) {
      const { w, slides } = config;

      w.on('keyup', (e) => {
        const slideHeight = slides.eq(0).height();
        const scrollTop = w.scrollTop();
        const windowHeight = w.height();
        const windowHalf = windowHeight / 2;
        const index = Math.floor((scrollTop + windowHalf) / slideHeight);

        switch (e.key) {
          case 'Enter':
            this.centerSlide(w, windowHeight, index, slideHeight);
            break;
          default:
            break;
        }
      });
    },

    // /**
    //  * Initiate scroll.
    //  * @param {object} config
    //  * @return {undefined}
    //  */
    // initScroll: function initScroll(config) {
    //   const { w } = config;
    //
    //   w.on('scroll', () => {
    //     const scrollTop = w.scrollTop();
    //     const windowHeight = w.height();
    //     const index = Math.floor(scrollTop / windowHeight);
    //     console.log(index);
    //   });
    // },

    updateSlides: function updateSlides(config) {
      const { w, slides } = config;
      const windowHeight = w.height();
      const spacingUnit = VERIOUS.core.getSpacingUnit();

      const slideHeight = (Math.ceil(windowHeight / spacingUnit) * spacingUnit)
        + (24 * spacingUnit);

      console.log(slideHeight);

      slides.height(slideHeight);
    },

    initSlides: function initSlides(config) {
      this.updateSlides(config);
    },

    /**
     * Initiate.
     * @param {object} config
     * @return {undefined}
     */
    init: function init(config) {
      // this.initScroll(config);
      this.initSlides(config);
      this.initKeys(config);
    },
  };

  VERIOUS.Runners.vsPresentation = (m) => { // eslint-disable-line
    const SLIDE_CLASS = 'vs-slide';

    const module = $(m);
    const w = $(window);
    const slides = module.find(`.${SLIDE_CLASS}`);

    const config = {
      module,
      w,
      slides,
    };

    VERIOUS.Modules.vsPresentation.init(config);
  };
})(VERIOUS, $);
