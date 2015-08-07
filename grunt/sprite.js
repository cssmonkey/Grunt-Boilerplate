// https://github.com/Ensighten/grunt-spritesmith

module.exports = {
	all: {
		src: 'assets/images/sprite/*.png',
		dest: 'assets/images/sprite-generated.png',
		destCss: 'assets/css/sprite-generated.less', 
		imgPath: '/assets/images/sprite-generated.png',
		padding: 5,
		'algorithm': 'binary-tree',
		'cssOpts': {
			// Some templates allow for skipping of function declarations
			'functions': true,

			// CSS template allows for overriding of CSS selectors
			'cssSelector': function (item) {
				return '.sprite-' + item.name;
			}
		}
	}
}