<template>
</template>

<script>
export default {
	name: 'Readme',
	data: () =>{
		return {};
	},
	mounted()
	{
		this.$store.commit( 'animateNavbarText', { text: 'cd ~', remove: true, removeAfter: 200, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~' )
				this.$store.commit( 'animateNavbarText', { text: 'cat README.md' });
			}
		});
	}
}
</script>
