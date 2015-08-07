// https://github.com/stefanjudis/grunt-phantomas 

module.exports = {
	dev: {
		options: {
			assertions : {
				'assetsWithQueryString' : 3,
				'biggestLatency'        : 1400,
				'bodyHTMLSize'          : 10500,
				'commentsSize'          : 55,
				'consoleMessages'       : 0,
				'hiddenContentSize'     : 65,
				'jsErrors'              : 0,
				'gzipRequests'          : 8,
				'medianResponse'        : 400,
				'nodesWithInlineCSS'    : 0,
				'requests'              : 30,
				'timeToFirstImage'      : 1100,
				'DOMelementsCount'      : 200,
				'DOMqueries'            : 10
			},
			url: ''
		}
	}
}