<template>
	<p v-if="error !== ''" class="text-center text-2xl text-red-500 my-5">There was an error: {{ error }}</p>
	<p class="text-center text-2xl mt-5 mb-1">{{ blogTitle }}</p>
	<p class="text-center text-sm mb-5">{{ blogTime }}</p>
	<div v-html="blogContent" class="p-10"></div>
	<div class="m-10 hidden sm:inline-block">
		<span class="text-black bg-white">{{ blogEncName }}( END )</span><span class="text-xs ml-2">Press 'q' to go back</span>
	</div>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="m-10 inline-block sm:hidden cursor-pointer h-6 w-6"
		@click="$router.go( -1 )"
		fill="none" viewBox="0 0 24 24" stroke="currentColor">
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
	</svg>
</template>

<script>
export default {
	name: 'Blog',

	data: function ()
	{
		return {
			error				: '',
			encodedBlogTitle	: this.$route.params.blogId,
			blogTitle			: '',
			blogContent			: '',
			blogTime			: '',
			blogEncName			: '',
			// Set explicitly since bind creates a new reference to the function every time it is called.
			keyDownFunc			: this.keyDownListener.bind( this )
		};
	},

	/**
	 * @brief	Responsible for loading the blog contents
	 */
	async created()
	{
		this.$store.commit( 'changeNavbarPath', '~/Documents' );

		const blog	= await this.$store.dispatch( 'getBlog', this.$route.params.blogId ).catch(() => {
			return null;
		});

		if ( blog === null )
			return this.error	= 'Error while loading blog data';

		this.blogContent	= blog.content;
		this.blogTitle		= blog.title;
		this.blogTime		= blog.date;

		window.addEventListener( 'keydown', this.keyDownFunc );

		this.blogEncName	= encodeURIComponent( this.blogTitle ).toLowerCase();
		this.$store.commit( 'animateNavbarText', { text: `less ${this.blogEncName}.blog`, speed: 20 } );
	},

	methods: {
		/**
		 * @brief	Triggers a go back event when pressing q
		 *
		 * @param	{KeyboardEvent} e
		 *
		 * @return	void
		 */
		keyDownListener( e )
		{
			if ( e.key === 'q' )
				this.$router.go( -1 );
		}
	},

	/**
	 * @brief	Removes the key listener event
	 *
	 * @return	void
	 */
	beforeUnmount()
	{
		window.removeEventListener( 'keydown', this.keyDownFunc );
	}
}
</script>

<style scoped>

</style>