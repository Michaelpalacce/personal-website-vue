<template>
	<div class="border-b p-4 text-lg">
		<!-- Desktop menu -->
		<div class="sm:block hidden">
			<LinkComponent class="sm:inline-block" :text="`stefan@website: /${$route.name} $ ${$store.state.navbarText}`" :blink="true"/>

			<div class="max-w-7xl flex justify-between sm:items-stretch sm:justify-start ">
				<div class="flex">
					<LinkComponent href="/" text="/home"/>
					<LinkComponent href="/projects" text="/repositories" :text-color="'text-yellow-600'"/>
					<LinkComponent href="/about" text="/README.md" :text-color="'text-blue-500'"/>
					<LinkComponent href="/contacts" text="/contacts" :text-color="'text-red-600'"/>
					<LinkComponent class="cursor-pointer" @click="exit" text="/exit" :text-color="'text-red-600'"/>
				</div>
			</div>
		</div>

		<!-- Mobile menu, show/hide based on menu state. -->
		<div class="sm:hidden">
			<LinkComponent class="inline-block" :text="`stefan@website: /${$route.name} $ ${$store.state.navbarText}`" :blink="true"/>

			<button class=" float-right hamburger hamburger--elastic p-2" type="button" @click="mobileCollapsed = ! mobileCollapsed">
			<span class="hamburger-box">
				<span class="hamburger-inner"></span>
			</span>
			</button>

			<div class="px-2 pt-2 pb-3 text-lg text-center" :class="{ hidden: mobileCollapsed }">
				<LinkComponent class="block" href="/" text="/home"/>
				<LinkComponent class="block" href="/projects" text="/repositories" :text-color="'text-yellow-600'"/>
				<LinkComponent class="block" href="/about" text="/README.md" :text-color="'text-blue-500'"/>
				<LinkComponent class="block" href="/contacts" text="/contacts" :text-color="'text-red-600'"/>
				<LinkComponent class="block cursor-pointer" @click="exit" text="/exit" :text-color="'text-red-600'"/>
			</div>
		</div>
	</div>
</template>

<script>

import LinkComponent from "../LinkComponent";
export default {
	name: 'Navbar',
	components: { LinkComponent },
	data: () => {
		return {
			mobileCollapsed: true
		};
	},

	methods: {
		exit()
		{
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