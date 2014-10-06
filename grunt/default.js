module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('default', [
		'modernizr',
		'sass',
		'autoprefixer',
		'concat',
		'autopolyfiller',
		'watch'
	]);
};
