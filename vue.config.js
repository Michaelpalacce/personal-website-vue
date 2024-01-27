const config	= {
	configureWebpack: {
		devServer: {
		}
	},
	productionSourceMap: false,
	devServer: {
		proxy: 'http://localhost:8080'
	}
};

module.exports	= config;
