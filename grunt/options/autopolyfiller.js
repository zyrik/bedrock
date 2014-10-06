module.exports = {
  dev: {
    options: {
      broswers: ['last 10 version', 'ie 9']
    },
    files: {
      '<%= config.app %>/scripts/polyfills.js': ['<%= config.src %>/javascript/**/*.js']
    }
  }
};
