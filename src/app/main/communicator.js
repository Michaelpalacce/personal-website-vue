'use strict';

import axios	from 'axios';

/**
 * @brief	ApiCommunicator used to make request to the API of the ServerEmulator
 */
class ApiCommunicator
{
	/**
	 * @details	The APP_ADDRESS is very important for the CORS headers, so this must be set correctly or it will fail
	 */
	constructor()
	{
	}

	/**
	 * @brief	Checks if there is a token in the localStorage
	 *
	 * @return	{Boolean}
	 */
	loggedIn()
	{
		return localStorage.loggedIn == 1;
	}

	/**
	 * @brief	Attempts a login, given the user credentials
	 *
	 * @param	{String} username
	 * @param	{String} password
	 *
	 * @return	{Promise<AxiosResponse<any>>}
	 */
	async login( username, password )
	{
		const response	= await axios.post( `/api/login`, { username, password }, { withCredentials: true } ).catch( ( error ) => {
			return error;
		});

		if ( response.message )
			throw response;

		localStorage.loggedIn	= 1;

		return response;
	}

	/**
	 * @brief	Logs the user out and removes the token from the localStorage
	 *
	 * @return	{Promise}
	 */
	async logout()
	{
		const response	= await axios.post(
			'/api/logout',
			{},
			{ withCredentials: true }
		).catch(() => {});

		localStorage.loggedIn	= 0;

		return response;
	}

	/**
	 * @brief	Returns either an error response or the actual response if it was 2xx
	 *
	 * @param	{Object} response
	 *
	 * @return	{*}
	 */
	_handleResponse( response )
	{
		const status	= response.status;

		if ( status % 200 >= 100 )
			throw response.response.data;

		return response.data;
	}

	/**
	 * @brief	Accepts a url and an Object of query parameters. Formats and returns the new url
	 *
	 * @param	{String} url
	 * @param	{Object} queryParams
	 *
	 * @return	{String}
	 */
	_formatUrlWithQueryParams( url, queryParams )
	{
		let params	= new URLSearchParams();

		for ( const [key, value] of Object.entries( queryParams ) )
		{
			if ( value )
				params.append( key, value );
		}

		params	= params.toString();

		if ( params )
			url += `?${params}`;

		return url;
	}
}

export default new ApiCommunicator();