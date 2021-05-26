<template>
	<Project v-for="project in projects" :project="project" />
</template>

<script>
import Project	from "./Components/Project";

export default {
	name: 'Projects',
	components: {Project},
	data: () =>{
		return {
			projects: [
				{
					title: 'EventRequest',
					link: 'https://github.com/Michaelpalacce/EventRequest.git',
					text: 'EventRequest is a zero-dependency, extremely fast and highly customizable web framework built in NodeJS.<br/>' +
						' It offers a wide array of built in plugins and a wide sort of extendable components. This site is powered by EventRequest!\n',
					images: [
						'https://comps.canstockphoto.com/example-red-3d-square-button-isolated-on-stock-illustrations_csp22789272.jpg',
						'https://us.123rf.com/450wm/houbacze/houbacze1809/houbacze180900156/110390100-banner-examples.jpg?ver=6'
					]
				},
				{
					title: 'EventRequest',
					link: 'https://github.com/Michaelpalacce/EventRequest.git',
					text: 'EventRequest is a zero-dependency, extremely fast and highly customizable web framework built in NodeJS.<br/>' +
						' It offers a wide array of built in plugins and a wide sort of extendable components. This site is powered by EventRequest!\n',
					images: []
				},
			]
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
