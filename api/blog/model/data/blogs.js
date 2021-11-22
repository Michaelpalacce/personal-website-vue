const fs	= require( 'fs' );
const path	= require( 'path' );

module.exports	= [
	{
		title	: 'My Homelab',
		date	: '20/11/2021',
		content	: fs.readFileSync( path.join( __dirname, './blogs/11.2021/my_homelab.html' ) )
	},
	{
		title	: 'EventRequest a All-you-need, Zero-Dependency, Fast, Web Framework',
		date	: '28/6/2021',
		content	: fs.readFileSync( path.join( __dirname, './blogs/06.2021/event_request_intro.html' ) )
	}
];