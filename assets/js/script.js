var fgmsdata = null;
jQuery(function($) {

  fgmsdata =fgms.init({
    debug: false,
    specials: { enable: true }
  }).setup();

  var $grid = $('.card-wrapper').isotope({itemSelector: 'li', layoutMode: 'fitRows'});
  $(window).bind('resize',function(){
    $grid.isotope('layout');
  })
  $grid.on('arrangeComplete',function(){
    console.log('arrangecomplete')
  })

  $grid.isotope('layout');
  $('.special-filters').on('click','button',function(){
     var filterValue = $(this).data('filter');
     $grid.isotope({filter: filterValue}) ;
     $('.special-filters button').removeClass('active');
     $(this).addClass('active');
  });


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

  if (typeof smoothScroll === 'object') {
    smoothScroll.init();
  }


});
