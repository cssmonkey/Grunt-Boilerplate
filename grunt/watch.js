// https://github.com/gruntjs/grunt-contrib-watch

module.exports = {
	js: {
		files: ['assets/js/**/*.js'],
		options: {
			livereload: true
		}
	},
	css: {
		files: ['assets/css/**/*.less'],
		options: {
			livereload: true
		},
		tasks: ['less:dev', 'postcss:dist']
	},
	html: {
		files: ['views/**/*.cshtml'],
		options: {
			livereload: true,
		}
	},
};