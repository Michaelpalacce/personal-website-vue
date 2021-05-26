'use strict';

// Dependencies
const path									= require( 'path' );
const { Logging }							= require( 'event_request' );

const { Console, File, Loggur, LOG_LEVELS }	= Logging;
const PROJECT_ROOT							= path.parse( require.main.filename ).dir;

/**
 * @brief	Logs to the /logs/access.log
 *
 * @details	Logs on a level of notice where the only thing being logged there is the routing information
 */
const accessFileLog	= new File({
	logLevel	: LOG_LEVELS.notice,
	filePath	: path.join( PROJECT_ROOT, '/logs/access.log' ),
	logLevels	: { notice : LOG_LEVELS.notice }
});

/**
 * @brief	Logs errors to /logs/error.log
 */
const errorFileLog	= new File({
	logLevel	: LOG_LEVELS.error,
	filePath	: path.join( PROJECT_ROOT, '/logs/error.log' ),
	logLevels	: { error : LOG_LEVELS.error }
});

/**
 * @brief	Logs everything to the console
 */
const consoleLog	= new Console( { logLevel : LOG_LEVELS.info } );

// The new Logger
const logger		= Loggur.createLogger({
	serverName		: 'Website',
	logLevel		: LOG_LEVELS.debug,
	transports		: [accessFileLog, errorFileLog, consoleLog]
});

// Adds a Logger to the Loggur with an id of storage
Loggur.addLogger( 'website', logger );

module.exports	= logger;