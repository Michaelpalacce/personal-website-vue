'use strict';

// Dependencies
const app			= require( 'event_request' )();
const ErrorHandler	= require( '../error/error_handler' );
const logger		= require( '../logging/logger' );

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
		'DNT',
		'sec-ch-ua',
		'sec-ch-ua-mobile'
	],
	credentials: true
});

app.apply( app.er_security,		{
	csp		: {
		directives	: {
			'script-src'	: [''],
			'style-src'		: [''],
			'img-src'		: ['data:'],
		}
	},
	hsts	: {
		includeSubDomains	: false,
		preload				: true,
	}
});

// Add Error Handler
app.add(( event ) => {
	event.errorHandler	= ErrorHandler;

	event.next();
});

// Serve Static Resources
app.apply( app.er_static,		{ paths	: ['assets', 'imgs'] } );
app.apply( app.er_static,		{ paths	: ['js', 'css'], cache: { cacheControl: 'public', expirationDirectives: { 'max-age': 120 } } } );

// Attach the cache server
app.apply( app.er_data_server, { dataServerOptions: { persist: true } } );

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
app.apply( app.er_timeout,	{ timeout	: process.env.REQUEST_TIMEOUT } );


// Add a logger
app.apply( app.er_logger,	{ logger } );

// Add a user cookie session
app.apply( app.er_session, { isCookieSession: true, isSecureCookie: true, sessionKey: 'token' } );

