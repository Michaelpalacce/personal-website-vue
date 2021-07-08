const fs	= require( 'fs' );
const path	= require( 'path' );

module.exports	= [
	{
		title	: 'EventRequest a 0 dependency all-in-one framework, designed for speed',
		date	: '28/6/2021',
		content	: fs.readFileSync( path.join( __dirname, './blogs/event_request_intro.html' ) )
	}
];