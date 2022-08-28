'use strict';

// Dependencies
const app			= require( 'event_request' )();
const ErrorHandler	= require( '../error/error_handler' );
const logger		= require( '../logging/logger' );
const path			= require( 'path' );

app.apply( app.er_cors, {
	origin: 'er_dynamic',
	headers: [
		'Access-Control-Allow-Headers',
		'Origin',
		'Accept',
		'X-Requested-With',
		'Cache-Control',
		'Content-Type',
		'Referer',
		'User-Agent',
		'Access-Control-Request-Method',
		'Access-Control-Request-Headers',
		'token',
		'DNT',
		'sec-ch-ua',
		'sec-ch-ua-mobile'
	],
	exposedHeaders: ['token'],
	credentials: true
});

// Add Error Handler
app.add(( event ) => {
	event.errorHandler	= ErrorHandler;

	event.next();
});

app.apply( app.er_etag, { strong: true } );

// Attach the cache server
app.apply( app.er_data_server, { dataServerOptions: { persist: true, persistPath: path.join( process.env.DATA_PATH, "cache" ) } } );

// Rate Limit the request
app.apply( app.er_rate_limits,	{ rules:
		[
			{
				"path": "",
				"methods": [],
				"maxAmount": 2000,
				"refillTime": 5,
				"refillAmount": 2000,
				"policy": "strict"
			}
		]
});

// Parse body
app.apply( app.er_body_parser_form );
app.apply( app.er_body_parser_json );
app.apply( app.er_body_parser_raw );

// Add Timeout
app.apply( app.er_timeout,	{ timeout	: process.env.REQUEST_TIMEOUT || 60000 } );

// Add a logger
app.apply( app.er_logger,	{ logger } );

require( '../../controllers' );
