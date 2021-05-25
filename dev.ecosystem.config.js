module.exports	= {
	apps : [
		{
			name: 'site',
			script: 'index.js',
			watch: true,
			ignore_watch : [
				"node_modules",
				"cache",
				"logs",
				"*.log",
				"*.json",
				"*.tmp",
				".idea",
				".git",
				"Uploads",
				"src",
				"public"
			],
			watch_options: {
				followSymlinks: false,
				usePolling: true
			},
			env: require( './env' )
		},
		{
			name: 'site-vue',
			script: './node_modules/@vue/cli-service/bin/vue-cli-service.js',
			args: 'serve'
		}
	]
};
