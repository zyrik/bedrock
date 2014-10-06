// autoprefixer task options
module.exports = {
	options: {
		browsers: ['last 10 version']
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= config.app %>/css/',
			src: '{,*/}*.css',
			dest: '<%= config.app %>/css/'
		}]
	}
};
