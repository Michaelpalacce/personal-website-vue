'use strict';

const allCertificates		= require( './data/certificates' );
const certificatesMetadata	= Buffer.from( JSON.stringify( allCertificates ) );

/**
 * @brief	Model responsible for getting all the Certificates
 */
class Certificates
{
	/**
	 * @brief	Returns a buffer with all the Certificates
	 *
	 * @return	{Buffer}
	 */
	getCertificates()
	{
		return certificatesMetadata;
	}
}

module.exports	= Certificates;