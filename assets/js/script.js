var fgmsdata = null;
jQuery(function($) {

  fgmsdata =fgms.init({
    debug: false,
    specials: { enable: true }
  }).setup();
  $(function(){
    if ((typeof ytp === 'object') && ($('#youtube-player-id').length > 0) ){
      var slideshow_delay = 15000;
      $('#youtube-player-id').YTPlayer();
      $('#youtube-player-id').on("YTPStart", function(e){
        // this sets up dalay to start slide show after
        setTimeout(function(){
          $('#homepage-slideshow').carousel('next');
          $('#homepage-slideshow').carousel('cycle');
        }, slideshow_delay);
      })
    }

  })



  imagesLoaded($('.feature-carousel img'),
    function(e, msg) {
      if ((msg === undefined) || (msg.length > 0) ) {
        console.log('Error loading images.', msg);
      }
      // this updates the window and menu location after images have been loaded.
      $('.carousel').css({
        'min-height': '100%'
      }).animate({
        opacity: 1
      });
      $(window).trigger('resize');
    }
  );
  if ($('.testimonial-carousel').length > 0) {
    $('.testimonial-carousel').carousel().fadeIn();
  }
  if (typeof smoothScroll === 'object') {

    smoothScroll.init();
  }

  if (($('.fg-wow').length > 0) && (typeof WOW === 'function')) {
    var wow = new WOW({
      boxClass: 'fg-wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
  }
});
