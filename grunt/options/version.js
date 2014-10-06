module.exports = {
  default: {
    options: {
      format: true,
      length: 32,
      manifest: 'web/app/themes/theme/assets/manifest.json',
      querystring: {
        style: 'roots_css',
        script: 'roots_js'
      }
    },
    files: {
      'web/app/themes/theme/lib/scripts.php': 'web/app/themes/theme/assets/{css,js}/{main,scripts}.min.{css,js}'
    }
  }
}
