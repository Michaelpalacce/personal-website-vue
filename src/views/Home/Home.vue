<template>
	<div class="flex">
		<LinkComponent class="text-7xl mt-10 w-1/2 mx-auto" text="Hello!"/>
	</div>
	<div class="text-blue-500 text-xl text-center mt-20 tracking-wider">
		&lt;name&gt;
		<span class="hidden sm:inline-block text-white text-xl mx-3">My name is</span>
		<span class="text-white text-2xl sm:text-3xl">Stefan Genov</span>
		&lt;/name&gt;
	</div>

	<div class="text-yellow-600 text-md text-center mt-10 tracking-wider">
		<span class="hidden sm:inline-block">&lt;profession&gt;</span>
		<span class="text-base sm:text-xl text-center text-white mx-3"> Backend Developer & DevOps </span>
		<span class="hidden sm:inline-block">&lt;/profession&gt;</span>
	</div>

</template>

<script>
import LinkComponent from "../Components/LinkComponent";
export default {
	name: 'Home',
	components: {LinkComponent},
	data: () =>{
		return {
		};
	},
	mounted()
	{
		this.$store.commit( 'animateNavbarText', { text: 'cd ~', remove: true, removeAfter: 200, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~' )
				this.$store.commit( 'animateNavbarText', { text: 'whoami' });
			}
		});
	}
}
</script>
