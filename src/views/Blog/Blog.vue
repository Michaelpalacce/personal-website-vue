<template>
	<p v-if="error !== ''" class="text-center text-2xl text-red-500 my-5">There was an error: {{ error }}</p>

	<div v-html="blogContent" class="p-10"></div>
</template>

<script>
import BlogsModel	from "./model/blogs";

export default {
	name: 'Blog',
	data: function ()
	{
		return {
			blogsModel	: new BlogsModel( this.$store ),
			blogContent	: '',
			error		: ''
		};
	},
	async created()
	{
		await this.blogsModel.populateBlogs();
		let blog		= null;
		const blodId	= this.$route.params.blogId;

		for ( const currentBlog of this.$store.state.blogs )
			if ( currentBlog.encodedTitle === blodId )
				blog	= currentBlog;

		if ( blog === null )
			return this.error	= 'Blog not found';

		this.blogContent	= blog.content === '' ? await this.blogsModel.getBlogContent( blodId ) : blog.content;
	}
}
</script>

<style scoped>

</style>