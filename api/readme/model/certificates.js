'use strict';

const allCertificates = require('./data/certificates');
const certificatesMetadata = Buffer.from(JSON.stringify(allCertificates));

module.exports = function() {
	return certificatesMetadata
}
