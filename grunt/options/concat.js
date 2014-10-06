module.exports = {
	options: {
		banner: '<%= banner %>',
		separator: ';'
	},
	loader: {
		src: [
			'<%= config.src %>/javascript/loader/**/*.js'
		],
		dest: '<%= config.app %>/scripts/loader.js'
	},
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/dist/jquery.js',
			'<%= config.vendor %>/jquery-tiny-pubsub/dist/ba-tiny-pubsub.js',
			'<%= config.vendor %>/lodash/dist/lodash.js'
		],
		dest: '<%= config.app %>/scripts/vendor/plugins.js'
	},
	mobile: {
		src: [
			'<%= config.vendor %>/fastclick/lib/fastclick.js'
		],
		dest: '<%= config.app %>/scripts/vendor/mobile.js'
	},
	dev: {
		src: [
			'<%= config.src %>/javascript/namespace.js',
			'<%= config.src %>/javascript/constants.js',
			'<%= config.src %>/javascript/featuresLoader.js',
			'<%= config.src %>/javascript/classes/{,*/}*.js',
			'<%= config.src %>/javascript/helpers/{,*/}*.js',
			'<%= config.src %>/javascript/features/{,*/}*.js',
			'<%= config.src %>/javascript/models/{,*/}*.js',
			'<%= config.src %>/javascript/controllers/{,*/}*.js',
			'<%= config.src %>/javascript/views/{,*/}*.js',
			'<%= config.src %>/javascript/init.js',
		],
		dest: '<%= config.app %>/scripts/main.js'
	}
}
