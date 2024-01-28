module.exports	= {
	apps : [
		{
			name: 'site',
			script: 'index.js',
			watch: true,
			ignore_watch : [
				"node_modules",
				"logs",
				"*.log",
				"*.json",
				"*.tmp",
				".idea",
				".git",
				"Uploads",
				"tmp",
				"src",
				"public"
			],
			watch_options: {
				followSymlinks: false,
				usePolling: true
			},
			env: {
				REQUEST_TIMEOUT	: 60000,
				ENV				: 'development',
				DATA_PATH		: './tmp',
				APP_PORT		: 8080
			}
		},
		{
			name: 'site-vue',
			script: './node_modules/@vue/cli-service/bin/vue-cli-service.js',
			args: 'serve'
		}
	]
};
