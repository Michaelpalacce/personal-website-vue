<template>
	<p class="mx-auto text-center text-6xl mt-10">Work In Progress</p>
</template>

<script>
export default {
	name: 'Blog',
	async mounted()
	{
		this.$store.commit( 'animateNavbarText', { text: 'cd ~/Documents', remove: true, removeAfter: 500, speed: 30, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~/Documents' );
				this.$store.commit( 'animateNavbarText', { text: 'cat *.blog', speed: 30 } );
			}
		});
	}
}
</script>

<style scoped>

</style>