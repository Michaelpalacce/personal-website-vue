<template>
	<div class="flex">
		<LinkComponent class="text-5xl sm:text-7xl mt-10 w-1/2 mx-auto text-center" text="Hello!" />
	</div>

	<transition name="whoami">
		<div v-if="whoami">
			<div class="text-blue-500 text-base text-center mt-20 tracking-wider">
				&lt;name&gt;
				<span class="hidden sm:inline-block text-white text-xl mx-3">My name is</span>
				<span class="text-white text-2xl sm:text-3xl">Stefan Genov</span>
				&lt;/name&gt;
			</div>

			<div class="text-yellow-500 text-md text-center mt-10 tracking-wider">
				<span class="hidden sm:inline-block">&lt;profession&gt;</span>
				<span class="text-base sm:text-xl text-center text-white mx-3"> Software Engineer & DevOps </span>
				<span class="hidden sm:inline-block">&lt;/profession&gt;</span>
			</div>

		</div>
	</transition>

	<transition-group name="whois">
		<div class="grid grid-cols-4 gap-y-20 mt-20" v-if="whois">
			<a v-for="contact in contacts" :href="contact.link" class="h-10 w-10 sm:h-14 sm:w-14 mx-auto"
				:key="contact.text">
				<img :src="contact.image" alt="" class="h-full">
				<p class="mt-2 text-center text-xs sm:text-base">{{ contact.text }}</p>
			</a>
		</div>

		<CopyableText class="text-center mt-20 block" v-if="whois" textColor="text-yellow-500"
			text="stefan@sgenov.dev" />
	</transition-group>
</template>

<script>
import LinkComponent from "../Components/LinkComponent";
import CopyableText from "../Components/Effects/CopyableText";
export default {
	name: 'Home',
	components: {
		CopyableText,
		LinkComponent
	},
	data: function () {
		return {
			whois: false,
			whoami: false,
			contacts: this.$store.state.contacts
		};
	},
	mounted() {
		this.$store.commit('animateNavbarText', {
			text: 'cd /home/sg', remove: true, removeAfter: 500, speed: 30, callback: () => {
				this.whoami = true;
				this.$store.commit('changeNavbarPath', '/home/sg');
				this.$store.commit('animateNavbarText', {
					text: 'whoami', remove: true, removeAfter: 500, callback: () => {
						this.whois = true;
						this.$store.commit('animateNavbarText', { text: 'whois sgenov.dev' });
					}
				});
			}
		});
	}
}
</script>

<style scoped>
.whois-enter-active,
.whois-leave-active {
	transition: opacity 1s ease;
}

.whois-enter-from,
.whois-leave-to {
	opacity: 0;
}

.whoami-enter-active,
.whoami-leave-active {
	transition: opacity 1s ease;
}

.whoami-enter-from,
.whoami-leave-to {
	opacity: 0;
}
</style>
