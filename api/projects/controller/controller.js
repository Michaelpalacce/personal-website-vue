'use strict';

const app = require('event_request')();
const router = app.Router();
const getProjects = require('../model/projects');

/**
 * @brief	Returns all the projects posts
 *
 * @details	Required Params: NONE
 * 			Required Query: NONE
 *
 * @return	void
 */
router.get('/projects', (event) => {
	event.conditionalSend(getProjects());
});

module.exports = router;
