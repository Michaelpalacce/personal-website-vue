'use strict';

const app = require('event_request')();
const router = app.Router();
const getAbilities = require('../model/abilities');
const getCertificates = require('../model/certificates');
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
	event.conditionalSend(getAbilities());
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
	event.conditionalSend(getCertificates());
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
