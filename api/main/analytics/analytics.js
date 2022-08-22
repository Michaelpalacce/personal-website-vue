const path				= require( 'path' );
const os				= require( 'os' );
const app				= require( 'event_request' )();
const DataServerMap		= require( 'event_request/server/components/caching/data_server_map' );

const metricsDataServer	= new DataServerMap({
	ttl: -1,
	useBigMap: true,
	persistInterval: 60,
	persist: true,
	persistPath: path.join( process.env.METRICS_PATH || os.tmpdir(), '.stefangenov.site.metrics' )
});

const metrics			= {
	uniqueVisitors	: require( './metrics/unique_visitors_metric' )( metricsDataServer )
};

/**
 * @brief	Initializes the metrics
 *
 * @return	Promise
 */
async function initMetrics()
{
	for ( const index in metrics )
	{
		const metric	= metrics[index];

		await metric.startUp();
	}
}
initMetrics();

app.add( async ( event ) => {
	for ( const index in metrics )
	{
		const metric	= metrics[index];

		await metric.callback( event );
	}

	event.extra.metrics	= metrics;

	event.next();
});