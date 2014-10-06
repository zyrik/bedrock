<?php
/**
 * Scripts and stylesheets
 *
 * Enqueue stylesheets in the following order:
 * 1. /theme/assets/css/main.css
 *
 * Enqueue scripts in the following order:
 * 1. jquery-1.11.1.min.js via Google CDN
 * 2. /theme/assets/js/vendor/modernizr.min.js
 * 3. /theme/assets/js/scripts.js (in footer)
 *
 * Google Analytics is loaded after enqueued scripts if:
 * - An ID has been defined in config.php
 * - You're not logged in as an administrator
 */
function roots_scripts() {
  /**
   * The build task in Grunt renames production assets with a hash
   * Read the asset names from assets-manifest.json
   */
  if (WP_ENV === 'development') {
    $assets = array(
      'framework' => '/assets/css/framework.css',
      'css'       => '/assets/css/main.css',
      'js'        => '/assets/scripts/main.js',
      'modernizr' => '/assets/scripts/vendor/modernizr.js',
      'loader'    => '/assets/scripts/loader.js',
      'plugins'   => '/assets/scripts/vendor/plugins.js'
    );
  } else {
    $assets     = array(
      'css'       => '/assets/css/main.min.css',
      'js'        => '/assets/scripts/main.min.js',
      'modernizr' => '/assets/scripts/vendor/modernizr.min.js',
      'loader'    => '/assets/scripts/head.min.js',
      'plugins'   => '/assets/scripts/vendor/plugins.min.js'
    );
  }

  if (WP_ENV === 'development') {
    wp_enqueue_style('roots_framework', get_template_directory_uri() . $assets['framework'], false, null);
    wp_enqueue_style('roots_css', get_template_directory_uri() . $assets['css'], false, null);
  } else {
    wp_enqueue_style('roots_css', get_template_directory_uri() . $assets['css'], false, null);
  }
  /**
   * jQuery is loaded using the same method from HTML5 Boilerplate:
   * Grab Google CDN's latest jQuery with a protocol relative URL; fallback to local if offline
   * It's kept in the header instead of footer to avoid conflicts with plugins.
   */
  if (!is_admin() && current_theme_supports('jquery-cdn')) {
    wp_deregister_script('jquery');
    wp_register_script('jquery', $assets['jquery'], array(), null, false);
    add_filter('script_loader_src', 'roots_jquery_local_fallback', 10, 2);
  }

  if (is_single() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }

  wp_enqueue_script('modernizr', get_template_directory_uri() . $assets['modernizr'], array(), null, false);
  wp_enqueue_script('loader', get_template_directory_uri() . $assets['loader'], array(), null, false);
  //wp_enqueue_script('jquery');
  wp_enqueue_script('roots_plugins', get_template_directory_uri() . $assets['plugins'], array(), null, true);
  wp_enqueue_script('roots_js', get_template_directory_uri() . $assets['js'], array(), null, true);
}
add_action('wp_enqueue_scripts', 'roots_scripts', 100);

// http://wordpress.stackexchange.com/a/12450
function roots_jquery_local_fallback($src, $handle = null) {
  static $add_jquery_fallback = false;

  if ($add_jquery_fallback) {
    echo '<script>window.jQuery || document.write(\'<script src="' . get_template_directory_uri() . '/assets/vendor/jquery/dist/jquery.min.js?1.11.1"><\/script>\')</script>' . "\n";
    $add_jquery_fallback = false;
  }

  if ($handle === 'jquery') {
    $add_jquery_fallback = true;
  }

  return $src;
}
add_action('wp_head', 'roots_jquery_local_fallback');
