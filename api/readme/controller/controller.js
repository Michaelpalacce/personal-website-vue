'use strict';

const app = require('event_request')();
const router = app.Router();
const Abilities = require('../model/abilities');
const Certificates = require('../model/certificates');
const getExperiences = require('../model/experiences');

/**
 * @brief	Returns all the abilities
 *
 * @details	Required Params: NONE
 * 			Required Query: NONE
 *
 * @return	void
 */
router.get('/abilities', (event) => {
	const model = new Abilities();

	event.conditionalSend(model.getAbilities());
});

/**
 * @brief	Returns all the certificates
 *
 * @details	Required Params: NONE
 * 			Required Query: NONE
 *
 * @return	void
 */
router.get('/certificates', (event) => {
	const model = new Certificates();

	event.conditionalSend(model.getCertificates());
});

/**
 * @brief	Returns all the experiences
 *
 * @details	Required Params: NONE
 * 			Required Query: NONE
 *
 * @return	void
 */
router.get('/experiences', (event) => {
	event.conditionalSend(getExperiences());
});

module.exports = router;
