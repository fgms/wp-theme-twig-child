<?php
add_action( 'wp_enqueue_scripts', function(){
  wp_enqueue_script('easing',get_stylesheet_directory_uri() . '/assets/js/jquery.easing.js');
  wp_enqueue_script('smoothzoom',get_stylesheet_directory_uri() . '/assets/js/Smoothzoom/smoothzoom.min.js');
  wp_enqueue_script('isotope',get_stylesheet_directory_uri() . '/assets/js/Isotopes/isotope.pkgd.min.js');
  wp_enqueue_script('smoothscroll',get_stylesheet_directory_uri() . '/assets/js/smooth-scroll.min.js');
  wp_enqueue_script('ytplayer',get_stylesheet_directory_uri() . '/assets/js/YTPlayer/jquery.mb.YTPlayer.min.js');
  wp_enqueue_script('fg-script',get_stylesheet_directory_uri() . '/assets/js/script.js');

  wp_enqueue_style('typlayer',get_stylesheet_directory_uri().'/assets/css/YTPlayer.css');
  if (is_plugin_active('wp-less/bootstrap.php')){
   wp_enqueue_style('theme-less',get_stylesheet_directory_uri().'/assets/less/style.less');
  }
  else {
   wp_enqueue_style('theme',get_stylesheet_directory_uri().'/assets/css/style.css');
  }
}, 30);

add_action('after_switch_theme', function(){
  add_action( 'admin_notices', function(){
    $messages = [];
    if (!is_plugin_active('wp-less/bootstrap.php')){
    	$messages[] = __( 'Warning! This Theme uses wp-less plugin for enhanced css', 'wp-theme-twig-child' );
    }
    foreach ($messages as $message){
      printf( '<div class="notice notice-warning is-dismissible"><p>%s</p></div>',  esc_html( $message ) );
    }
  });
})


?>
