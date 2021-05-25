<template>
</template>

<script>
export default {
	name: 'Home',
	data: () =>{
		return {
		};
	},
	created()
	{
		this.$store.commit( 'animateNavbarText', { text: 'whoami', remove: true } );
	}
}
</script>
