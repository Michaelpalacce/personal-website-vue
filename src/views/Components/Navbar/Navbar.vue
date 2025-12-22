<template>
	<div class="border-b p-4 text-lg">
		<!-- Desktop menu -->
		<div class="sm:block hidden">
			<p class="sm:block font-semibold truncate my-2">sg@website: {{ $store.state.navbarPath }} $ {{ $store.state.navbarText }}</p>

			<div class="max-w-7xl flex justify-between sm:items-stretch sm:justify-start ">
				<div class="flex">
					<LinkComponent href="/" text="/home/sg"/>
					<LinkComponent href="/projects" text="~/projects" :text-color="'text-yellow-500'"/>
					<LinkComponent href="/readme" text="~/README.md" :text-color="'text-blue-500'"/>
					<LinkComponent href="/blogs" text="~/Documents" :text-color="'text-purple-400'"/>
					<LinkComponent href="/terminal" text="sudo su" :text-color="'text-green-500'"/>
					<LinkComponent class="cursor-pointer" @click="exit" text="exit" :text-color="'text-red-600'"/>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="sm:hidden">
			<p class="font-semibold truncate my-2">sg@website: {{ $store.state.navbarPath }} $ {{ $store.state.navbarText }}</p>

			<button class="w-full hamburger hamburger--elastic p-2" type="button" @click="mobileCollapsed = ! mobileCollapsed">
			<span class="hamburger-box text-center">
				<span class="hamburger-inner"></span>
			</span>
			</button>

			<div class="px-2 pt-2 pb-3 text-lg text-center" :class="{ hidden: mobileCollapsed }">
				<LinkComponent class="block" href="/" text="/home/sg"/>
				<LinkComponent class="block" href="/projects" text="~/projects" :text-color="'text-yellow-500'"/>
				<LinkComponent class="block" href="/readme" text="~/README.md" :text-color="'text-blue-500'"/>
				<LinkComponent class="block" href="/blogs" text="~/Documents" :text-color="'text-purple-500'"/>
				<LinkComponent class="block" href="/terminal" text="sudo su" :text-color="'text-green-500'"/>
				<LinkComponent class="block cursor-pointer" @click="exit" text="exit" :text-color="'text-red-600'"/>
			</div>
		</div>
	</div>
</template>

<script>
import LinkComponent	from "../LinkComponent";
import TypewriterText	from "../Effects/TypewriterText";
import communicator		from "@/app/main/communicator";

export default {
	name: 'Navbar',
	components: {TypewriterText, LinkComponent },
	data: () => {
		return {
			mobileCollapsed: true
		};
	},

	methods: {
		/**
		 * @details	If the exit button is clicked, then there will be an animation showing
		 * 			the cover and then taking the user back to the welcome screen after 250 ms
		 *
		 * @return	void
		 */
		async exit() {
			this.emitter.emit( 'cover' );
			setTimeout(() => { this.$store.commit( 'unseenWelcomeScreen' ); }, 250);
		}
	}
}
</script>

<style scoped>
@import '../../../assets/styles/hamburger.css';

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
	background-color: white;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
	background-color: white;
}
</style>
