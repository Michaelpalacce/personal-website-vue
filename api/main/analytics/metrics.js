const er	= require( 'event_request' )();
const app	= er.Router();

app.get( '/realtimeUsers', async ( event ) => {
	event.send( await event.extra.metrics.uniqueVisitors.get() );
});

module.exports	= app;