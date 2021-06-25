'use strict';

const { App, Server }	= require( 'event_request' );
const app				= App();

// Attach the kernel
require( './kernel' );

if ( process.env.ENV !== 'development' )
{
	const http		= require( 'http' );
	const https		= require( 'https' );
	const fs		= require( 'fs' );

	const server	= https.createServer(
		{
			key		: fs.readFileSync( process.env.SSL_KEY_PATH ),
			cert	: fs.readFileSync( process.env.SSL_CERT_PATH )
		},
		app.attach()
	);

	const redirectApp	= new Server();

	redirectApp.add(( event ) => {
		event.logger = {};
		event.redirect( 'https://' + event.getRequestHeader( 'host' ) + event.path, 301 );
	});

	const redirectServer	= http.createServer( redirectApp.attach() );

	redirectServer.listen( 80, () => { app.Loggur.log( 'HTTP Redirect Server started', 200 ) } );
	server.listen( 443, () => { app.Loggur.log( 'HTTPS Server started', 200 ); });
}
else
	app.listen( 80, () => { app.Loggur.log( 'HTTP Server started', 200 ); } );