'use strict';

const allProjects = require('./data/projects');
const projectsMetadata = Buffer.from(JSON.stringify(allProjects));

module.exports = function() {
	return projectsMetadata
}
