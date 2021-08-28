<template>
	<Project v-for="project in projects" :project="project" />
</template>

<script>
import Project	from "./Components/Project";

export default {
	name: 'Projects',
	components: { Project },
	data: function ()
	{
		return {};
	},
	computed: {
		projects: function () { return this.$store.state.projects; },
	},
	async mounted() {
		this.$store.commit( 'animateNavbarText', { text: 'cd ~/projects', remove: true, removeAfter: 200, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~/projects' );
				this.$store.commit( 'animateNavbarText', { text: 'ls -lah' } );
			}
		} );

		await this.$store.dispatch( 'populateProjects' ).catch( console.log );
	}
}
</script>
