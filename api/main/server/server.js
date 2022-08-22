'use strict';

const { App, Server }	= require( 'event_request' );
const app				= App();

// Attach the kernel
require( './kernel' );

app.listen( 80, () => { app.Loggur.log( 'HTTP Server started', 200 ); } )