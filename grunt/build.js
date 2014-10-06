module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('build', [
		'clean:temp',
		'exec',
		'sitemap',
		'uncss',
		'cssmin',
		'uglify'
	]);
};
