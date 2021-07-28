<template>
	<p v-if="error !== ''" class="text-center text-2xl text-red-500 my-5">There was an error: {{ error }}</p>
	<Loader ref="loader" class="mx-auto" v-if="displayBlogs.length === 0"/>

	<transition name="loader">
		<div v-if="displayBlogs.length > 0">
			<div class="my-5 mx-10">
				<span>
					<span class="text-sm">drw-r--r--</span>
					<span class="ml-2 text-sm">1</span>
					<span class="ml-2 text-sm">sg</span>
					<span class="ml-2 text-sm">sg</span>
					<span class="ml-2 text-sm">{{ currentDate }}</span>
					<span class="ml-2 inline-block text-blue-500"> . </span>
				</span>
			</div>

			<div class="my-5 mx-10">
				<span>
					<span class="text-sm ">drw-r--r--</span>
					<span class="ml-2 text-sm">1</span>
					<span class="ml-2 text-sm">sg</span>
					<span class="ml-2 text-sm">sg</span>
					<span class="ml-2 text-sm">{{ currentDate }}</span>
					<span class="ml-2 inline-block text-blue-500"> .. </span>
				</span>
			</div>

			<div v-for="blog of displayBlogs" class="my-5 mx-10">
				<span>
					<span class="text-sm">-rw-r--r--</span>
					<span class="ml-2 text-xs sm:text-sm">1</span>
					<span class="ml-2 text-xs sm:text-sm">sg</span>
					<span class="ml-2 text-xs sm:text-sm">sg</span>
					<span class="ml-2 text-xs sm:text-sm">{{ blog.date }}</span>
					<router-link :to="`/blogs/${blog.encodedTitle}`" class="ml-2 inline-block cursor-pointer text-blue-500 text-sm sm:text-base">{{ blog.title }}.blog</router-link>
				</span>
			</div>

			<div class="text-center">
				<span v-for="(page, index) of blogsPages" class="mt-5 text-xl mx-2 border rounded-md py-1 px-2 cursor-pointer select-none" :class="{ 'bg-gray-200 border-none text-black': blogsIndex === index }" @click="changePage">{{ page }}</span>
			</div>
		</div>
	</transition>
</template>

<script>
import Loader	from "../Components/Loader/Loader";
export default {
	name: 'Blogs',
	components: { Loader },
	data: function ()
	{
		return {
			error	: '',
			blogsIndex: 0,
			blogsChunkSize: 5,
			currentDate	: ''
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
				this.$store.commit( 'animateNavbarText', { text: 'ls -lah .', speed: 30 } );
			}
		});

		this.currentDate	= this.formatDate( new Date() );

		await this.$store.dispatch( 'populateBlogs' ).catch( this.showError.bind( this ) );
	},
	methods: {

		/**
		 * @brief	Formats a Date object
		 *
		 * @param	{Date} date
		 *
		 * @return	{String}
		 */
		formatDate( date )
		{
			return date.getDate() + "/" + ( date.getMonth() + 1 ) + "/" + date.getFullYear()
		},

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
		},
	}
}
</script>

<style scoped>
.loader-enter-active,
.loader-leave-active {
	transition: opacity .5s ease;
}

.loader-enter-from,
.loader-leave-to {
	opacity: 0;
}
</style>