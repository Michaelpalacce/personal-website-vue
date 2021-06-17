const app					= require( 'event_request' )();
const securityController	= require( './api/main/security/security' );
const metricsController		= require( './api/main/analytics/metrics' );

require( './api/main/server/kernel' );
require( './api/main/analytics/analytics' )

app.add( '/api', securityController );
app.add( '/api', metricsController );

require( './api/main/server/server' );
