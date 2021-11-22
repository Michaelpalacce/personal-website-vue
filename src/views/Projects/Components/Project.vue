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
			<div class="mx-auto text-center w-full lg:w-4/6" v-if="show === true" :id="title">
				<a :href="linkToPage" class="block mb-3" @click="copyLinkToClipboard">
					<span class="text-3xl">{{ title }}</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-2" viewBox="0 0 20 20" fill="currentColor" >
						<path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
					</svg>
				</a>

				<CopyableText v-if="installCommand" :text="installCommand" textColor="text-yellow-500" class="text-sm"/>

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

						<div class="grid gap-2 gap-y-2 mt-5"
							 :class="`${images.length > 0 ? 'grid-cols-3' : 'md:grid-cols-5 grid-cols-3 '}`"
						>
							<div v-for="technology in technologies">
								<a :href="technology.link">
									<img :src="technology.content" alt="" class="w-16 h-16 mx-auto" v-if="technology.isImg">
									<p v-else class="w-full mt-4 text-red-600">{{ technology.content }}</p>
								</a>
							</div>
						</div>

						<div v-if="links.length > 0"
							 class="grid gap-2 gap-y-2 mt-5"
							 :class="`${images.length > 0 ? 'grid-cols-3' : 'md:grid-cols-5 grid-cols-3 '}`"
						>
							<button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white w-20 rounded mx-auto"
									@click="showLinks = ! showLinks"
							>
								Links
							</button>
							<a v-for="link in links" :href="link.link" class="w-16 h-16 mx-auto" :class="{ invisible: ! showLinks }">
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
			showLinks: false,
			title: this.project.title,
			link: this.project.link,
			linkToPage: window.location.origin + window.location.pathname	+ '#' + encodeURIComponent( this.project.title ),
			text: this.project.text,
			images: this.project.images || [],
			nodeModule: this.project.nodeModule || {},
			links: this.project.links || [],
			badges: this.project.badges || [],
			technologies: this.project.technologies || [],
			installCommand: this.project.installCommand
		};
	},
	mounted: function ()
	{
		if ( this.$route.hash )
			this.show	= true;
	},
	methods: {
		copyLinkToClipboard()
		{
			const dummy	= document.createElement( 'input' );

			document.body.appendChild( dummy );
			dummy.value	= this.linkToPage;
			dummy.select();
			document.execCommand( 'copy' );
			document.body.removeChild( dummy );
		}
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