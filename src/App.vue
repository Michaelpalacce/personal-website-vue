<template>
	<Cover/>

	<Welcome v-if="$store.state.welcomeScreen == 0"/>

	<div v-if="$store.state.welcomeScreen == 1">
		<Navbar />
		<router-view />
	</div>
</template>

<script>
import Navbar	from "./views/Components/Navbar/Navbar";
import Welcome	from "./views/Home/Welcome";
import Cover	from "./views/Components/Cover/Cover";

export default {
	components: {
		Cover,
		Welcome,
		Navbar
	},
	mounted() {
		// Do not use $route, it does not work because hash is always empty
		if ( window.location.hash )
			this.$store.commit( 'seenWelcomeScreen' );
	}
}
</script>