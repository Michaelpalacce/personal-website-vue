import { createStore }	from 'vuex'
import communicator		from "../app/main/communicator";

export default createStore({
	state: {
		welcomeScreen	: localStorage.welcomeScreen || 0,
		navbarText		: '',
		navbarPath		: '',
		navbarTimeout	: null,
		projects		: [],
		contacts		: require( './data/contacts' ),
		abilities		: [],
		languages		: require( './data/languages' ),
		experiences		: require( './data/experiences' ),
		certificates	: [],
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
		populateBlogs( state, data ) {
			state.blogs	= data;
		},

		/**
		 * @brief	Populate the projects with the given data
		 *
		 * @param	{Object} state
		 * @param	{Object} data
		 *
		 * @return	void
		 */
		populateProjects( state, data ) {
			state.projects	= data;
		},

		/**
		 * @brief	Populate the certificates with the given data
		 *
		 * @param	{Object} state
		 * @param	{Object} data
		 *
		 * @return	void
		 */
		populateCertificates( state, data ) {
			state.certificates	= data;
		},

		/**
		 * @brief	Populate the abilities with the given data
		 *
		 * @param	{Object} state
		 * @param	{Object} data
		 *
		 * @return	void
		 */
		populateAbilities( state, data ) {
			state.abilities	= data;
		},

		/**
		 * @brief	Populates a single blog with content data
		 *
		 * @param	{Object} state
		 * @param	{Object} data
		 *
		 * @return	void
		 */
		populateBlog( state, data ) {
			const blog		= this.getters.getBlog( data.encodedTitle );
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
		setNavbarText( state, text = '' ) {
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
		 * @param	{Function} callback
		 *
		 * @return	void
		 */
		animateNavbarText( state, { text, speed = 50, chunks = 1, remove = false, removeAfter = 2000, callback = () => {} } ) {
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
		changeNavbarPath( state, path ) {
			state.navbarPath	= path;
		}
	},
	actions: {
		/**
		 * @brief	Gets a blog
		 *
		 * @details	Loads all blogs if not loaded, populates the given blog with blog data and returns the blog
		 *
		 * @param	{Function} commit
		 * @param	{Function} dispatch
		 * @param	{Object} getters
		 * @param	{String} encodedTitle
		 *
		 * @return {Promise<Object>}
		 */
		async getBlog( { commit, dispatch, getters }, encodedTitle )
		{
			await dispatch( 'populateBlogs' );
			const blog	= getters.getBlog( encodedTitle );

			if ( blog === null )
				return null;

			if ( blog.content !== '' )
				return blog;

			const blogResponse	= await communicator.getBlogContents( encodedTitle );
			const content		= blogResponse.data;

			commit( 'populateBlog', { encodedTitle, content } );

			return blog;
		},

		/**
		 * @brief	Populates the blogs if needed with title and date data
		 *
		 * @param	{Object} state
		 * @param	{Function} commit
		 *
		 * @return	{Promise<void>}
		 */
		async populateBlogs( { state, commit } )
		{
			if ( state.blogs.length !== 0 )
				return;

			const blogsResponse	= await communicator.getAllBlogs();
			const blogs			= blogsResponse.data;

			commit( 'populateBlogs', blogs );
		},

		/**
		 * @brief	Populates the certificates
		 *
		 * @param	{Object} state
		 * @param	{Function} commit
		 *
		 * @return	{Promise<void>}
		 */
		async populateCertificates( { state, commit } )
		{
			if ( state.certificates.length !== 0 )
				return;

			const certificatesResponse	= await communicator.getAllCertificates();
			const certificates			= certificatesResponse.data;

			commit( 'populateCertificates', certificates );
		},

		/**
		 * @brief	Populates the projects if needed
		 *
		 * @param	{Object} state
		 * @param	{Function} commit
		 *
		 * @return	{Promise<void>}
		 */
		async populateProjects( { state, commit } )
		{
			if ( state.projects.length !== 0 )
				return;

			const projectsResponse	= await communicator.getAllProjects();
			const projects			= projectsResponse.data;

			commit( 'populateProjects', projects );
		},

		/**
		 * @brief	Populates the abilities if needed
		 *
		 * @param	{Object} state
		 * @param	{Function} commit
		 *
		 * @return	{Promise<void>}
		 */
		async populateAbilities( { state, commit } )
		{
			if ( state.abilities.length !== 0 )
				return;

			const abilitiesResponse	= await communicator.getAllAbilities();
			const abilities			= abilitiesResponse.data;

			commit( 'populateAbilities', abilities );
		}
	},
	getters: {
		/**
		 * @brief	Gets a given blog by it's encodedBlogTitle
		 *
		 * @param	{Object} state
		 *
		 * @return	{Function}
		 */
		getBlog: ( state ) => ( encodedBlogTitle ) => {
			return state.blogs.find( blog => blog.encodedTitle === encodedBlogTitle );
		}
	},
	modules: {

	}
})
