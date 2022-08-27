<template>
	<div class="my-20">
		<p class="text-2xl text-blue-500 mx-10">Nothing here folks</p>
	</div>
</template>

<script>
import communicator		from "../../app/main/communicator";
import LinkComponent	from "../Components/LinkComponent";
import TypewriterText	from "../Components/Effects/TypewriterText";

export default {
	name: 'Admin',
	components: { TypewriterText, LinkComponent },
	data: function (){
		return {
			realtimeUsers	: '0',
			interval		: null,
			blogHtml		: ''
		};
	},
	created() {
		if ( ! communicator.isLoggedIn() )
			return this.$router.push( { name: 'login' } );
	},
	methods: {}
}
</script>

<style scoped>
.editor{
	height: 65vh;
}
</style>