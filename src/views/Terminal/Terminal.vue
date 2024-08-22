<template>
	<div class="mx-5 my-5 text-center">
		<p class="">Getting my setup up and running</p>
		<p class="mt-5">To get started, run the following command in your terminal (Ubuntu/MacOS) to install
			dependencies (or do so manually):</p>
		<CopyableText class="text-center block mt-5" textColor="text-yellow-500"
			text="curl -o- https://raw.githubusercontent.com/Michaelpalacce/.dotfiles/master/setup-deps.sh | bash" />
		<p class="mt-5">Restart terminal, then run:</p>
		<CopyableText class="text-center block mt-5" textColor="text-yellow-500"
			text="curl -o- https://raw.githubusercontent.com/Michaelpalacce/.dotfiles/master/setup.sh | bash" />

		<div class="mt-5">
			If needed, download a NerdFont from: <a class="text-blue-500"
				href="https://www.nerdfonts.com/font-downloads">https://www.nerdfonts.com/font-downloads</a>
		</div>
	</div>
</template>

<script>
import TypewriterText from "../Components/Effects/TypewriterText";
import CopyableText from "../Components/Effects/CopyableText";

export default {
	name: 'Terminal',
	components: { TypewriterText, CopyableText },
	data: () => {
		return {};
	},
	mounted() {

		this.$store.commit('animateNavbarText', {
			text: 'cd ~', remove: true, speed: 25, removeAfter: 500, callback: () => {
				this.$store.commit('changeNavbarPath', '~');
				this.$store.commit('animateNavbarText', { text: "sudo su", speed: 20 });
			}
		});
	}
}
</script>

<style scoped></style>
