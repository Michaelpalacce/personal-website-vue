'use strict';

const allAbilities		= require( './data/abilities' );
const abilitiesMetadata	= Buffer.from( JSON.stringify( allAbilities ) );

/**
 * @brief	Model responsible for getting all the Abilities
 */
class Abilities {
	/**
	 * @brief	Returns a buffer with all the Abilities
	 *
	 * @return	{Buffer}
	 */
	getAbilities() {
		return abilitiesMetadata;
	}
}

module.exports	= Abilities;