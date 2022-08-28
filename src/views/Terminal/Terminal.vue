<template>
	<div class="mx-5 my-5 ">
		<TypewriterText class="inline-block" :title="`sg@website: /root $`" text="Not implemented yet!" :speed="25" />
	</div>
</template>

<script>
import TypewriterText	from "../Components/Effects/TypewriterText";

export default {
	name: 'Terminal',
	components: {TypewriterText},
	data: () => {
		return {};
	},
	mounted() {
		this.$store.commit( 'animateNavbarText', { text: 'cd ~', remove: true, speed: 25, removeAfter: 500, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~' );
			}
		});
	}
}
</script>

<style scoped>

</style>