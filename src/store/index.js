import { createStore }	from 'vuex'

export default createStore({
	state: {
		welcomeScreen	: localStorage.welcomeScreen || 0,
		navbarText		: '',
		navbarPath		: '',
		navbarTimeout	: null,
		projects		: [
			{
				title: 'EventRequest',
				nodeModule: {
					version: '12.x',
				},
				links: [
					{
						icon: '/imgs/github-icon.svg',
						link: 'https://github.com/Michaelpalacce/EventRequest.git'
					},
					{
						icon: '/imgs/npm-icon.svg',
						link: 'https://www.npmjs.com/package/event_request'
					}
				],
				link: 'https://github.com/Michaelpalacce/EventRequest.git',
				text: 'EventRequest is a zero-dependency, extremely fast and highly customizable web framework built in NodeJS.' +
					'<br/><br/>' +
					'It offers a wide array of built in plugins and a wide sort of extendable components. This site is powered by EventRequest!',
				images: [
					'/imgs/EventRequest-1.svg',
					'/imgs/EventRequest-2.png'
				]
			},
			{
				title: 'ServerEmulator',
				links: [
					{
						icon: '/imgs/github-icon.svg',
						link: 'https://github.com/Michaelpalacce/Server.git'
					},
					{
						icon: '/imgs/npm-icon.svg',
						link: 'https://www.npmjs.com/package/server-emulator'
					}
				],
				nodeModule: {
					version: '12.x',
				},
				link: 'https://github.com/Michaelpalacce/Server.git',
				text: 'This npm module allows you to access your file system in the browser. Allows for a wide variety of operations ( copy, cut, paste, delete, download, etc. ). It also allows for video, text, image and audio streaming.' +
					'<br/><br/>' +
					'In the future more modules will be added to it. Intended as a personal cloud replacement.' +
					'<br/><br/>' +
					'It acts as a Command Line Interface ( CLI ) and can be booted from anywhere by installing it as a global module.',
				images: [
					'/imgs/ServerEmulator-1.png'
				]
			},
			{
				title: 'FsBrowser',
				links: [
					{
						icon: '/imgs/github-icon.svg',
						link: 'https://github.com/Michaelpalacce/fs-browser.git'
					},
					{
						icon: '/imgs/npm-icon.svg',
						link: 'https://www.npmjs.com/package/fs-browser'
					}
				],
				link: 'https://github.com/Michaelpalacce/fs-browser.git',
				nodeModule: {
					version: '12.x',
				},
				text: 'This npm module allows pagination of the file system. It fetches directories first and then files, allowing you to order the results in a more predictable fashion.' +
					'<br/><br/>' +
					'The module is entirely asynchronous and works in Linux and Windows systems.',
				images: [
					'/imgs/fs-browser-1.svg',
					'/imgs/fs-browser-2.svg',
					'/imgs/fs-browser-3.svg'
				]
			},
			{
				title: 'Redis DataServer',
				links: [
					{
						icon: '/imgs/github-icon.svg',
						link: 'https://github.com/Michaelpalacce/er_redis_data_server.git'
					},
					{
						icon: '/imgs/npm-icon.svg',
						link: 'https://www.npmjs.com/package/er_redis_data_server'
					}
				],
				link: 'https://github.com/Michaelpalacce/er_redis_data_server.git',
				nodeModule: {
					version: '12.x',
				},
				text: 'er_redis_data_server is a plugin for EventRequest that adds the ability to attach a redis data server. This allows for distributed caching.',
				images: [
					'/imgs/er_redis_data_server-1.svg'
				]
			},
			{
				title: 'Website',
				links: [
					{
						icon: '/imgs/github-icon.svg',
						link: 'https://github.com/Michaelpalacce/personal-website-vue.git'
					}
				],
				link: 'https://github.com/Michaelpalacce/personal-website-vue.git',
				nodeModule: {},
				text: 'Nothing to say really! You are looking at it. Uses NodeJS as a backend, EJS in the front-end.' +
					'<br/><br/>' +
					'Main idea of this website was to test how ' +
					'<a href="https://github.com/Michaelpalacce/EventRequest" class="text-red-600">EventRequest</a> will handle an actual environment.',
				images: []
			},
		]
	},
	mutations: {
		seenWelcomeScreen( state ){ state.welcomeScreen		= localStorage.welcomeScreen	= 1; },
		unseenWelcomeScreen( state ){ state.welcomeScreen	= localStorage.welcomeScreen	= 0; },

		/**
		 * @brief	Sets the navbar text and cleans up any timeouts
		 *
		 * @param	{Object} state
		 * @param	{String} text
		 *
		 * @return	void
		 */
		setNavbarText( state, text = '' )
		{
			clearTimeout( state.navbarTimeout );
			state.navbarText	= text;
		},

		/**
		 * @brief	Animates the navigation bar text
		 *
		 * @details	A variable amount of speed can be passed as well as chunks more than 1 to type faster if needed
		 * 			If remove is set to true, the text will be removed after the removeAfter timeout has passed when the text is typed out
		 *
		 * @param	{Object} state
		 * @param	{String} text
		 * @param	{Number} speed
		 * @param	{Number} chunks
		 * @param	{Boolean} remove
		 * @param	{Number} removeAfter
		 *
		 * @return	void
		 */
		animateNavbarText( state, { text, speed = 50, chunks = 1, remove = false, removeAfter = 2000, callback = () => {} } )
		{
			const animateText	= ( index = 0 ) => {
				if ( text.length !== state.navbarText.length )
				{
					state.navbarText	+= text.slice( index, index + chunks );
					index				+= chunks;
					state.navbarTimeout	= setTimeout( () => {
						animateText( index );
					}, speed );
				}
				else
				{
					if ( remove )
						state.navbarTimeout	= setTimeout(() => {
							state.navbarText = '';
							callback();
						}, removeAfter )
					else
						callback();
				}
			}

			clearTimeout( state.navbarTimeout );
			state.navbarText	= '';
			animateText();
		},

		/**
		 * @brief	Stores a new navbar path
		 *
		 * @param	{Object} state
		 * @param	{String} path
		 *
		 * @return	void
		 */
		changeNavbarPath( state, path )
		{
			state.navbarPath	= path;
		}
	},
	actions: {

	},
	modules: {

	}
})
