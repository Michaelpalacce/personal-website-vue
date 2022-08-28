<template>
	<TypewriterText class="md:ml-20 break-words" :chunks="5" :speed="5" :doneTypingTimeout="0" v-if="loading === true && firstLoadText === true" @done-typing="secondLoadText = true" :text="`Cloning into '.' ...`" />
	<TypewriterText class="md:ml-20 break-words" :chunks="5" :speed="5" :doneTypingTimeout="0" v-if="loading === true && secondLoadText === true" @done-typing="thirdLoadText = true" :text="`remote: Enumerating objects: 14863, done.`" />
	<TypewriterText class="md:ml-20 break-words" :chunks="5" :speed="5" :doneTypingTimeout="0" v-if="loading === true && thirdLoadText === true" @done-typing="fourthLoadText = true" :text="`remote: Counting objects: 100% (104/104), done.`" />
	<TypewriterText class="md:ml-20 break-words" :chunks="5" :speed="5" :doneTypingTimeout="0" v-if="loading === true && fourthLoadText === true" @done-typing="fifthLoadText = true" :text="`remote: Compressing objects: 100% (67/67), done.`" />
	<TypewriterText class="md:ml-20 break-words" :chunks="5" :speed="5" :doneTypingTimeout="0" v-if="loading === true && fifthLoadText === true" @done-typing="sixthLoadText = true" :text="`remote: Total 14863 (delta 39), reused 69 (delta 24), pack-reused 14759`" />
	<TypewriterText class="md:ml-20 break-words" :chunks="5" :speed="5" :doneTypingTimeout="0" v-if="loading === true && sixthLoadText === true" @done-typing="seventhLoadText = true" :text="`Receiving objects: 100% (14863/14863), 6.14 MiB | 2.91 MiB/s, done.`" />
	<TypewriterText class="md:ml-20 break-words" :chunks="5" :speed="5" :doneTypingTimeout="500" v-if="loading === true && seventhLoadText === true" @done-typing="loading = false" :text="`Resolving deltas: 100% (8676/8676), done.`" />

	<Project v-for="project in projects" :project="project" :show="!loading"/>
</template>

<script>
import Project	from "./Components/Project";
import TypewriterText from "@/views/Components/Effects/TypewriterText";

export default {
	name: 'Projects',
	components: { Project, TypewriterText },
	data: function () {
		return {
			loading: true,
			firstLoadText: true,
			secondLoadText: false,
			thirdLoadText: false,
			fourthLoadText: false,
			fifthLoadText: false,
			sixthLoadText: false,
			seventhLoadText: false
		};
	},
	computed: {
		projects: function () { return this.$store.state.projects; },
	},
	async created() {
		if ( window.location.hash )
			this.loading	= false;
	},
	async mounted() {
		this.$store.commit( 'animateNavbarText', { speed: 25, text: 'cd ~/projects', remove: true, removeAfter: 100, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~/projects' );
				this.$store.commit( 'animateNavbarText', { text: 'curl -s https://api.github.com/users/Michaelpalacce/repos | grep \\"clone_url\\" | awk \'{print $2}\' | sed -e \'s/"//g\' -e \'s/,//g\' | xargs -n1 git clone', speed: 10 } );
			}
		} );

		await this.$store.dispatch( 'populateProjects' ).catch( console.log );
	}
}
</script>
