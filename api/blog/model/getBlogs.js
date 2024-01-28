'use strict';

const allBlogs = require('./data/blogs');

function toDate(date) {
	const [day, month, year] = date.split('/');
	return new Date(year, month - 1, day);
}

/**
* @brief	Cache the metadata of all the blogs
*/
const blogMetadata = Buffer.from(
	JSON.stringify(
		allBlogs.map((element) => {
			return {
				title: element.title,
				date: element.date,
				content: '',
				encodedTitle: Buffer.from(element.title).toString('base64')
			};
		}).sort((a, b) => {
			return toDate(b.date) - toDate(a.date);
		})
	)
);

/**
 * @brief	Model responsible for getting all the Blogs
 */
class GetBlogs {
	/**
	 * @brief	Returns a buffer with all the blogs
	 *
	 * @return	{Buffer}
	 */
	getBlogs() {
		return blogMetadata;
	}

	/**
	 * @brief	Returns a buffer of all the Blog Content
	 *
	 * @param	{String} blogTitle
	 *
	 * @return	{Buffer}
	 */
	getBlogContent(blogTitle) {
		for (const blog of allBlogs)
			if (blog.title === blogTitle)
				return Buffer.from(blog.content);

		throw { code: 'app.api.blog.blogNotFound', status: 400 };
	}
}

module.exports = GetBlogs;
