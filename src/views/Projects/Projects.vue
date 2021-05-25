<template>
</template>

<script>
export default {
	name: 'Projects',
	data: () =>{
		return {};
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
