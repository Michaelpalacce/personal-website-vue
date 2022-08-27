'use strict';

const { App, Server }	= require( 'event_request' );
const app				= App();

// Attach the kernel
require( './kernel' );

app.listen( process.env.APP_PORT || 80, () => { app.Loggur.log( 'HTTP Server started', 200 ); } )