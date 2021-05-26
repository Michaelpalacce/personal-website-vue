import { createStore }	from 'vuex'

export default createStore({
	state: {
		welcomeScreen	: localStorage.welcomeScreen || 0,
		navbarText		: '',
		navbarPath		: '',
		navbarTimeout	: null
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
