const fs	= require( 'fs' );
const path	= require( 'path' );

module.exports	= [
	{
		title	: 'Getting started with a HomeLab!',
		date	: '20/11/2021',
		content	: fs.readFileSync( path.join( __dirname, './blogs/11.2021/homelab_intro.html' ) )
	},
	{
		title	: 'EventRequest a All-you-need, Zero-Dependency, Fast, Web Framework',
		date	: '28/6/2021',
		content	: fs.readFileSync( path.join( __dirname, './blogs/06.2021/event_request_intro.html' ) )
	}
];