import { createStore }	from 'vuex'

export default createStore({
	state: {
		welcomeScreen	: localStorage.welcomeScreen || 0,
		navbarText		: '',
	},
	mutations: {
		seenWelcomeScreen(){ this.state.welcomeScreen	= localStorage.welcomeScreen	= 1; },
		unseenWelcomeScreen(){ this.state.welcomeScreen	= localStorage.welcomeScreen	= 0; },
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
		animateNavbarText( state, { text, speed = 25, chunks = 1, remove = false, removeAfter = 1000 } )
		{
			const animateText	= ( index = 0 ) => {
				if ( text.length !== state.navbarText.length )
				{
					state.navbarText	+= text.slice( index, index + chunks );
					index				+= chunks;
					setTimeout( () => {
						animateText( index );
					}, speed );
				}
				else
				{
					if ( remove )
						setTimeout(() => { state.navbarText = ''; }, removeAfter )
				}
			}

			animateText();
		}
	},
	actions: {

	},
	modules: {

	}
})
