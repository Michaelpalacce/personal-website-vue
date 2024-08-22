'use strict';

const allExperiences = require('./data/experiences');
const experiencesMetadata = Buffer.from(JSON.stringify(allExperiences));

module.exports = function() {
	return experiencesMetadata;
}
