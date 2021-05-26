<template>
	<div class="flex flex-row max-w-7xl mx-auto">
		<transition name="slide">
			<div class="relative h-96 w-96">
				<span class="absolute left-0 rounded-2xl cursor-pointer w-12 h-full flex text-black" @click="prev">
					<svg xmlns="http://www.w3.org/2000/svg" class="mx-auto my-auto h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</span>
				<span class="absolute right-0 rounded-2xl cursor-pointer w-12 h-full flex text-black" @click="next">
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
		prev()
		{
			this.activeIndex--;
			this.activeIndex	= Math.max( this.activeIndex, 0 );

			console.log( this.activeIndex );
		},
		next()
		{
			this.activeIndex++;
			this.activeIndex	= Math.min( this.images.length - 1, this.activeIndex );

			console.log( this.images.length );
			console.log( this.activeIndex );

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