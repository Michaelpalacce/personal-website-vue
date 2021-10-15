const config	= {
	configureWebpack: {
		devServer: {
			stats: {
				colors: true,
				hash: false,
				version: false,
				timings: false,
				assets: false,
				chunks: false,
				modules: false,
				reasons: false,
				children: false,
				source: false,
				errors: false,
				errorDetails: false,
				warnings: false,
				publicPath: false
			}
		}
	},
	productionSourceMap: false,
	devServer: {
		proxy: 'http://localhost:80'
	}
};

module.exports	= config;