import { createStore }	from 'vuex'

/**
 * @brief	Formats a Date object
 *
 * @param	{Date} date
 *
 * @return	{String}
 */
function formatDate( date )
{
	let hours	= date.getHours();
	let minutes	= date.getMinutes();
	minutes		= minutes < 10 ? '0' + minutes : minutes;

	return date.getDate()
		+ "/"
		+ ( date.getMonth() + 1 )
		+ "/"
		+ date.getFullYear()
		+ "  "
		+ hours
		+ ':'
		+ minutes;
}

export default createStore({
	state: {
		welcomeScreen	: localStorage.welcomeScreen || 0,
		navbarText		: '',
		navbarPath		: '',
		navbarTimeout	: null,
		projects		: require( './data/projects' ),
		contacts		: require( './data/contacts' ),
		abilities		: require( './data/abilities' ),
		languages		: require( './data/languages' ),
		experiences		: require( './data/experiences' ),
		certificates	: require( './data/certificates' ),
		blogs			: []
	},
	mutations: {
		seenWelcomeScreen( state ){ state.welcomeScreen		= localStorage.welcomeScreen	= 1; },
		unseenWelcomeScreen( state ){ state.welcomeScreen	= localStorage.welcomeScreen	= 0; },

		/**
		 * @brief	Populate the blogs with the given data
		 *
		 * @param	{Object} state
		 * @param	{Object} data
		 *
		 * @return	void
		 */
		populateBlogs( state, data )
		{
			state.blogs	= data.map(( element ) => {
				element.formattedDate	= formatDate( new Date( element.date ) );
				element.content			= '';

				return element;
			});
		},

		populateBlog( state, data )
		{
			for ( const blog of state.blogs )
				if ( blog.encodedTitle === data.encodedTitle )
					blog.content	= data.content;
		},

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
