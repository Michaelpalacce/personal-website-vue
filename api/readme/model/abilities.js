'use strict';

const allAbilities = require('./data/abilities');
const abilitiesMetadata = Buffer.from(JSON.stringify(allAbilities));

module.exports = function() {
	return abilitiesMetadata;
}
