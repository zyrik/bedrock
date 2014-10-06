module.exports = {
	dist: {
		options: {
      ignore       : [/expanded/,/js/,/wp-/,/align/,/admin-bar/],
      //stylesheets  : ['assets/css/main.min.css'],
      //ignoreSheets : [/fonts.googleapis/],
      urls         : [], //Overwritten in load_sitemap_and_uncss task
    },
		files: {
			'<%= config.temp %>/css/tidy.css': [
				'web/app/themes/theme/**/*.php'
			]
		}
	}
};
