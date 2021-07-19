'use strict';

const app			= require( 'event_request' )().Router();
const GetBlogsModel	= require( '../model/getBlogs' );

/**
 * @brief	Returns all the blog posts
 *
 * @details	Required Params: NONE
 * 			Required Query: NONE
 *
 * @return	void
 */
app.get( '/blogs', ( event ) =>{
	const model	= new GetBlogsModel();


	event.send( model.getBlogs() );
});

/**
 * @brief	Returns the content of a specific blog
 *
 * @details	Required Params: NONE
 * 			Required Query: blogName {String} -> base64 encoded blog name
 *
 * @return	void
 */
app.get( '/blogs/:blogName:', ( event ) =>{
	const model		= new GetBlogsModel();
	const content	= model.getBlogContent( Buffer.from( event.params.blogName, 'base64' ).toString( 'utf-8' ) );

	event.send( content );
});

module.exports	= app;
