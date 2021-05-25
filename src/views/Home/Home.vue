<template>
	<div class="text-blue-500 text-xl text-center mt-20 tracking-wider">
		&lt;name&gt;
		<span class="text-white text-xl mx-3">My name is <span class="text-3xl">Stefan Genov</span></span>
		&lt;/name&gt;
	</div>

	<div class="text-yellow-600 text-md text-center mt-10 tracking-wider">
		&lt;profession&gt;
		<span class="text-xl text-center text-white mx-3"> Backend Developer & DevOps </span>
		&lt;/profession&gt;
	</div>
</template>

<script>
export default {
	name: 'Home',
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
