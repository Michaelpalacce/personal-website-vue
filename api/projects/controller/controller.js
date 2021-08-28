'use strict';

const app		= require( 'event_request' )();
const router	= app.Router();
const Projects	= require( '../model/projects' );

/**
 * @brief	Returns all the projects posts
 *
 * @details	Required Params: NONE
 * 			Required Query: NONE
 *
 * @return	void
 */
router.get( '/projects', ( event ) =>{
	const model	= new Projects();

	event.conditionalSend( model.getProjects() );
});

module.exports	= router;