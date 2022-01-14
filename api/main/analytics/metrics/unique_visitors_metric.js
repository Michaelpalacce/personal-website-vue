const io		= require( '@pm2/io' );
const crypto	= require( 'crypto' );

/**
 * @brief	Provided a data server, returns the total unique visitors counter
 *
 * @param	{DataServer} dataServer
 *
 * @return	Object
 */
module.exports	= ( dataServer ) => {
	const key		= '$METRICS:uniqueVisitors';
	const name		= 'Realtime unique visitors';
	const id		= 'app/realtime/unique-visitors';

	const counter	= io.counter( { name, id } );

	const metric	= {};

	/**
	 * @brief	Fetches the total number of unique visitors
	 *
	 * @return	Promise
	 */
	metric.startUp	= async function()
	{
		if ( await dataServer.get( key ) === null )
			await dataServer.set( key, 0 );

		counter.inc( await dataServer.get( key ) );
	};

	/**
	 * @brief	Increments the total number of unique visitors if needed
	 *
	 * @param	{EventRequest} event
	 *
	 * @return	Promise
	 */
	metric.callback	= async function( event )
	{
		const md5Sum	= crypto.createHash( 'md5' );
		md5Sum.update( event.clientIp );
		const result	= `${key}${md5Sum.digest( 'utf8' )}`;

		if ( await dataServer.get( result ) === null )
		{
			dataServer.set( result, '1' );

			await dataServer.increment( key, 1 );
			counter.inc();
		}
	};

	/**
	 * @brief	Gets the metric result
	 *
	 * @return	Promise
	 */
	metric.get		= async function ()
	{
		return await dataServer.get( key );
	}

	return metric;
}