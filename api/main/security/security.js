'use strict';

const er	= require( 'event_request' )();
const app	= er.Router();

/**
 * @brief	Init middleware for the security
 */
app.add( async ( event ) => {
	await event.initSession();

	event.next();
});

/**
 * @brief	Add a logout route
 *
 * @details	Removes the session to logout hte user
 */
app.post( '/logout', async ( event ) => {
	await event.session.removeSession();

	event.send();
});

/**
 * @brief	Performs a login
 */
app.post( '/login', async ( event ) => {
	let result	= event.validate( event.body, { username : 'filled||string', password : 'filled||string' } );

	if ( result.hasValidationFailed() )
		throw { code: 'app.security.unauthorized.missingCredentials' };

	const { username, password }	= result.getValidationResult();

	if ( password === process.env.PASS && username === process.env.USER )
	{
		event.session.add( 'username', username );

		return event.send();
	}

	throw { code: 'app.security.unauthorized.userInvalidCredentials' };
});

/**
 * @brief	Middleware for all requests, throws app.security.unauthenticated in case of an error
 */
app.add({
	route	: /^\/api(?!\/login)(.*)/,
	handler	: ( event ) => {
		if ( ! event.session.has( 'username' ) )
			throw { code: 'app.security.unauthenticated' };

		event.next();
	}
});

module.exports	= app;