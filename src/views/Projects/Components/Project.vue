<template>
	<div class="my-20">
		<TypewriterText class="md:ml-20 break-words"
						:title="`sg@website: /${$route.name} $`"
						:text="`git clone ${link} .`"
						:speed="10"
						@done-typing="show = true"
						v-if="show === false"
		/>

		<transition name="fade">
			<div class="mx-auto text-center w-full lg:w-4/6" v-if="show === true">
				<p class="text-3xl">{{ title }}</p>

				<div class="md:flex">
					<div class="mt-10 w-full" :class="{ 'md:w-1/2': images.length !== 0 }">
						<span v-html="text"></span>
						<div v-if="nodeModule.version">
							<br/>
							<span>{{ title }} supports NodeJS {{ nodeModule.version }} and newer.</span>
						</div>

						<div v-if="links.length > 0"  class="flex">
								<a v-for="link in links" :href="link.link" class="w-20 h-20 mx-auto">
									<img :src="link.icon" alt="" class="align-middle h-full">
								</a>
						</div>
					</div>
					<div class="flex w-full md:w-1/2 h-96 my-auto" v-if="images.length > 0">
						<Carousel class="mx-auto" :images="images"/>
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
			images: this.project.images || [],
			nodeModule: this.project.nodeModule || {},
			links: this.project.links || []
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