'use strict';

const app					= require( 'event_request' )();
const securityController	= require( '../api/main/security/security' );
const metricsController		= require( '../api/main/analytics/metrics' );

const path					= require( 'path' );
const fs					= require( 'fs' );
const PROJECT_ROOT			= path.parse( require.main.filename ).dir;

require( '../api/main/analytics/analytics' );
app.add( '/api', securityController );
app.add( '/api', metricsController );

// Improve this by improving the static plugin in EventRequest
// CV
app.get( '/version', ( event )=>{
	event.setResponseHeader( 'Content-Type', 'text/plain' );
	fs.createReadStream( `${PROJECT_ROOT}/dist/version` ).pipe( event.response );
});

// CV
app.get( '/CV', ( event )=>{
	event.setResponseHeader( 'Content-Type', 'application/pdf' );
	fs.createReadStream( `${PROJECT_ROOT}/dist/CV.pdf` ).pipe( event.response );
});

// Frontend
app.get(( event )=>{
	event.setResponseHeader( 'Content-Type', 'text/html' );
	fs.createReadStream( `${PROJECT_ROOT}/dist/index.html` ).pipe( event.response );
});
