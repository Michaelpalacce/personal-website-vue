'use strict';

const allProjects		= require( './data/projects' );
const projectsMetadata	= Buffer.from( JSON.stringify( allProjects ) );

/**
 * @brief	Model responsible for getting all the Projects
 */
class Projects
{
	/**
	 * @brief	Returns a buffer with all the projects
	 *
	 * @return	{Buffer}
	 */
	getProjects()
	{
		return projectsMetadata;
	}
}

module.exports	= Projects;