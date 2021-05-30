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
				<CopyableText v-if="installCommand" :text="installCommand" textColor="text-yellow-500"/>
				<div class="md:flex mt-10">
					<div class="w-full" :class="{ 'md:w-5/12': images.length !== 0 }">
						<span v-html="text"></span>
						<div v-if="nodeModule.version">
							<br/>
							<span>{{ title }} supports NodeJS {{ nodeModule.version }} and newer.</span>
						</div>

						<div v-if="badges.length > 0"  class="grid mt-5" :class="`${images.length > 0 ? 'grid-cols-2 gap-2' : 'grid-cols-4 gap-2'}`">
							<a v-for="badge in badges" :href="badge.link" class="mx-auto"><img :src="badge.badge" :alt="badge.link"></a>
						</div>

						<div v-if="links.length > 0"  class="flex mt-5">
							<a v-for="link in links" :href="link.link" class="w-20 h-20 mx-auto">
								<img :src="link.icon" alt="" class="h-full">
							</a>
						</div>
					</div>
					<div class="md:w-1/12"></div>
					<div class="flex w-full md:w-6/12 h-96 my-auto" v-if="images.length > 0">
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
import CopyableText from "../../Components/Effects/CopyableText";
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
			links: this.project.links || [],
			badges: this.project.badges || [],
			installCommand: this.project.installCommand
		};
	},
	components: {
		CopyableText,
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
	transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>