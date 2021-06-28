import communicator from "../../../app/main/communicator";

/**
 * @brief	Model responsible for blogs data
 */
class BlogsModel
{
	constructor( store )
	{
		this.store	= store;
	}

	/**
	 * @brief	Populates the blogs if they are not populated
	 *
	 * @return	Promise<void>
	 */
	async populateBlogs()
	{
		if ( this.store.state.blogs.length !== 0 )
			return;

		const blogsResponse	= await communicator.getAllBlogs();

		this.store.commit( 'populateBlogs', blogsResponse.data )
	}

	/**
	 * @brief	Gets a given blog's contents
	 *
	 * @param	{String} encodedTitle
	 *
	 * @return {Promise<Object>}
	 */
	async getBlogContent( encodedTitle )
	{
		const blogResponse	= await communicator.getBlogContents( encodedTitle );

		this.store.commit( 'populateBlog', { encodedTitle, content: blogResponse.data } );

		return blogResponse.data;
	}
}

export default BlogsModel;