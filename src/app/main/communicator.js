'use strict';

import axios from 'axios';

/**
 * @brief	ApiCommunicator used to make request to the API of the ServerEmulator
 */
class ApiCommunicator {
	/**
	 * @brief	Fetches all the projects
	 *
	 * @return	{Promise<AxiosResponse<any>>}
	 */
	async getAllProjects() {
		const response = await axios.get(`/api/projects`).catch((error) => {
			return error;
		});

		if (response.message)
			throw response;

		return response;
	}

	/**
	 * @brief	Fetches all the abilities
	 *
	 * @return	{Promise<AxiosResponse<any>>}
	 */
	async getAllAbilities() {
		const response = await axios.get(`/api/abilities`).catch((error) => {
			return error;
		});

		if (response.message)
			throw response;

		return response;
	}

	/**
	 * @brief	Fetches all the blogs' titles and dates
	 *
	 * @return	{Promise<AxiosResponse<any>>}
	 */
	async getAllBlogs() {
		const response = await axios.get(`/api/blogs`).catch((error) => {
			return error;
		});

		if (response.message)
			throw response;

		return response;
	}

	/**
	 * @brief	Fetches all the certificates
	 *
	 * @return	{Promise<AxiosResponse<any>>}
	 */
	async getAllCertificates() {
		const response = await axios.get(`/api/certificates`).catch((error) => {
			return error;
		});

		if (response.message)
			throw response;

		return response;
	}

	/**
	 * @brief	Fetches all the experiences
	 *
	 * @return	{Promise<AxiosResponse<any>>}
	 */
	async getAllExperiences() {
		const response = await axios.get(`/api/experiences`).catch((error) => {
			return error;
		});

		if (response.message)
			throw response;

		return response;
	}

	/**
	 * @brief	Fetches the given blog's content
	 *
	 * @param	{String} encodedBlogTitle
	 *
	 * @return	{Promise<AxiosResponse<any>>}
	 */
	async getBlogContents(encodedBlogTitle) {
		const response = await axios.get(`/api/blogs/${encodedBlogTitle}`).catch((error) => {
			return error;
		});

		if (response.message)
			throw response;

		return response;
	}

	/**
	 * @brief	Accepts a url and an Object of query parameters. Formats and returns the new url
	 *
	 * @param	{String} url
	 * @param	{Object} queryParams
	 *
	 * @return	{String}
	 */
	_formatUrlWithQueryParams(url, queryParams) {
		let params = new URLSearchParams();

		for (const [key, value] of Object.entries(queryParams)) {
			if (value)
				params.append(key, value);
		}

		params = params.toString();

		if (params)
			url += `?${params}`;

		return url;
	}
}

export default new ApiCommunicator();
