<template>
	<div class="flex">
		<transition name="slide">
			<div class="relative">
				<span class="absolute left-0 rounded-2xl cursor-pointer w-12 h-full flex text-black opacity-30 hover:opacity-100" @click="prev">
					<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</span>
				<span class="absolute right-0 rounded-2xl cursor-pointer w-12 h-full flex text-black opacity-30 hover:opacity-100" @click="next">
					<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-auto items-center h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</span>
				<img v-for="(image, index) in images" :src="image" alt="" :class="{ hidden: activeIndex !== index }" class="object-contain w-full h-full">
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'Carousel',
	components: {},
	data: () => {
		return {
			activeIndex: 0
		};
	},
	methods: {
		/**
		 * @brief	Go to previous image
		 *
		 * @details	If there is no previous image, go to last image
		 *
		 * @return	void
		 */
		prev()
		{
			this.activeIndex--;
			if ( this.activeIndex < 0 )
				this.activeIndex	= this.images.length - 1;
		},
		/**
		 * @brief	Go to the next image
		 *
		 * @details	If there is no next image, go to first image
		 *
		 * @return	void
		 */
		next()
		{
			this.activeIndex++;
			if ( this.activeIndex > this.images.length - 1 )
				this.activeIndex	= 0;
		},
	},
	props: {
		images: {
			type: Array,
			default: []
		}
	}
}
</script>

<style scoped>
</style>