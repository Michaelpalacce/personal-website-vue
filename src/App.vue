<template>
	<Cover/>

	<Welcome v-if="$store.state.welcomeScreen == 0"/>

	<div v-if="$store.state.welcomeScreen == 1">
		<Navbar />
		<router-view />
	</div>

	<div class="fixed bottom-0 text-center w-screen bg-gray-800 h-10">
		Self hosted with <span> &#128421; </span> on my <a class="text-red-600" href="https://github.com/Michaelpalacce/HomeLab">Homelab</a>
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