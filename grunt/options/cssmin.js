module.exports = {
	dist: {
		files: {
			'<%= config.app %>/css/main.min.css': [
				'<%= config.temp %>/css/tidy.css'
			]
		}
	}
};
