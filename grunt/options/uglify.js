module.exports = {
	options: {
    compress: {
      drop_console: true
    }
  },
	my_target: {
		files: {
			// List any Javascript file that need to be minified
			'<%= config.app %>/scripts/vendor/plugins.min.js': [
				'<%= config.app %>/scripts/vendor/plugins.js'
			],
			'<%= config.app %>/scripts/vendor/modernizr.min.js': [
				'<%= config.app %>/scripts/vendor/modernizr.js',
			],
			'<%= config.app %>/scripts/main.min.js': [
				'<%= config.app %>/scripts/main.js'
			],
			'<%= config.app %>/scripts/head.min.js': [
				'<%= config.app %>/scripts/loader.js',
				'<%= config.app %>/scripts/polyfills.js'
			],
			'<%= config.app %>/scripts/mobile.min.js': [
				'<%= config.app %>/scripts/vendor/mobile.js'
			]
		}
	}
};
