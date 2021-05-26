<template>
	<div class="my-20">
		<TypewriterText class="ml-20 truncate"
						:title="`sg@website: /${$route.name} $`"
						:text="`git clone ${link} .`"
						:speed="10"
						@done-typing="show = true"
						v-if="show === false"
		/>

		<transition name="fade">
			<div class="mx-auto text-center w-4/6" v-if="show === true">
				<p class="text-white text-3xl">{{ title }}</p>
				<div class="flex mt-5">
					<div :class="{ 'w-1/2': images.length !== 0 }">
						<span class="text-white text-base" v-html="text"></span>
					</div>
					<div class="w-1/2" v-if="images.length > 0">
						<Carousel :images="images"/>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import TypewriterText from "../../Components/Effects/TypewriterText";
import Carousel from "../../Components/Carousel/Carousel";
export default {
	name: 'Project',
	data: function ()
	{
		return {
			show: false,
			title: this.project.title,
			link: this.project.link,
			text: this.project.text,
			images: this.project.images || []
		};
	},
	components: {
		Carousel,
		TypewriterText
	},
	props: {
		project: Object
	}
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>