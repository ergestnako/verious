/* global VERIOUS, $, window */

((VERIOUS, $, window) => {
  /**
   * Core functions available to all modules.
   * @module core
   */
  VERIOUS.core = { // eslint-disable-line

    /**
     * Stop scroll.
     * @return {undefined}
     */
    stopScroll: function stopScroll() {
      // Record current scroll top.
      const scrollTop = $(window).scrollTop();
      const b = $('body');

      // Save the scroll top value to the body element.
      b.data('scrollTop', scrollTop);

      // Lock the body.
      b.css('position', 'fixed');
      b.css('overflow', 'hidden');
      b.css('left', '0px');
      b.css('right', '0px');
      b.css('top', `-${scrollTop}px`);
    },

    /**
     * Start scroll.
     * @return {undefined}
     */
    startScroll: function startScroll() {
      const b = $('body');

      // Retrieve last scroll position from body element.
      const scrollTop = b.data('scrollTop');

      // Unlock body.
      b.css('position', '');
      b.css('overflow', '');
      b.css('left', '');
      b.css('right', '');

      // Scroll to the last position before locking body.
      b.scrollTop(scrollTop);
    },
  };
})(VERIOUS, $, window);
