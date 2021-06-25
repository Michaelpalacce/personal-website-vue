const er	= require( 'event_request' )();
const app	= er.Router();

// Finish this up
app.post( '/blog', ( event ) => {
	event.send( 'ok' );
});

module.exports	= app;