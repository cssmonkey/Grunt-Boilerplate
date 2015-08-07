// https://github.com/gruntjs/grunt-contrib-less

module.exports = {
	dev: {
		options: {
			compress: false,
			sourceMap: false,
			sourceMapRootpath: '/'
		},
		files: {
			'assets/css/styles.css': 'assets/css/app.less',
			'assets/css/ie8.css': 'assets/css/ie8.less'
		}
	},
	build: {
		options: {
			compress: true,
			cleancss: true,
			sourceMap: true,
			sourceMapRootpath: '/'
		},
		files: {
			'assets/css/styles.min.css': 'assets/css/app.less',
			'assets/css/ie8.min.css': 'assets/css/ie8.less'
		}
	}
}