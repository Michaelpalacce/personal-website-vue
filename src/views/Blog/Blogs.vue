<template>
	<p v-if="error !== ''" class="text-center text-2xl text-red-500 my-5">There was an error: {{ error }}</p>

	<div v-for="blog of displayBlogs" class="my-10 mx-10">
		<router-link :to="`/blogs/${blog.encodedTitle}`" class="cursor-pointer text-2xl">{{ blog.title }}</router-link>
		<p class="mt-2 text-sm">{{ blog.formattedDate }}</p>
	</div>

	<div class="text-center">
		<span v-for="(page, index) of blogsPages" class="mt-5 text-xl mx-2 border rounded-md py-1 px-2 cursor-pointer select-none" :class="{ 'bg-gray-200 border-none text-black': blogsIndex === index }" @click="changePage">{{ page }}</span>
	</div>
</template>

<script>
import BlogsModel	from "./model/blogs";

export default {
	name: 'Blogs',
	data: function ()
	{
		return {
			error	: '',
			blogsIndex: 0,
			blogsChunkSize: 5,
			blogsModel: new BlogsModel( this.$store )
		};
	},
	computed: {
		blogs: function () { return this.$store.state.blogs; },
		/**
		 * @brief	Computes the current display blogs
		 *
		 * @return	{Array}
		 */
		displayBlogs: function ()
		{
			const start	= this.blogsIndex * this.blogsChunkSize;
			return this.blogs.slice( start, start + this.blogsChunkSize );
		},
		/**
		 * @brief	Computes the total amount of blog pages
		 *
		 * @return	{Number}
		 */
		blogsPages: function ()
		{
			return Math.ceil( this.blogs.length / this.blogsChunkSize );
		}
	},

	async mounted()
	{
		this.$store.commit( 'animateNavbarText', { text: 'cd ~/Documents', remove: true, removeAfter: 500, speed: 30, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~/Documents' );
				this.$store.commit( 'animateNavbarText', { text: 'cat *.blog', speed: 30 } );
			}
		});

		await this.blogsModel.populateBlogs().catch( this.showError.bind( this ) );
	},
	methods: {
		/**
		 * @brief	Changes the current blogs page
		 *
		 * @param	{Event} e
		 *
		 * @return	void
		 */
		changePage( e )
		{
			this.blogsIndex	= parseInt( e.target.innerHTML ) - 1;
		},

		/**
		 * @brief	Shows an error to the user
		 *
		 * @param	{Object} error
		 *
		 * @return	void
		 */
		showError( error )
		{
			this.error	= error.response.data.error.code;
		}
	}
}
</script>

<style scoped>

</style>