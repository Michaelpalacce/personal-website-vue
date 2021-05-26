<template>
	<Project v-for="project in projects" :project="project" />
</template>

<script>
import Project	from "./Components/Project";

export default {
	name: 'Projects',
	components: {Project},
	data: function ()
	{
		return {
			projects: this.$store.state.projects
		};
	},
	mounted()
	{
		this.$store.commit( 'animateNavbarText', { text: 'cd /projects', remove: true, removeAfter: 200, callback: () => {
				this.$store.commit( 'changeNavbarPath', '/projects' );
				this.$store.commit( 'animateNavbarText', { text: 'ls -lah' } );
			}
		} );
	}
}
</script>
