<template>
	<div class="mx-20 my-20">
		<p class="text-2xl text-blue-500">Realtime users:
			<span class="text-white">{{ realtimeUsers }}</span>
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 inline-block cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="refreshRealtimeUsers">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
			</svg>
		</p>
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
			interval		: null
		};
	},
	created() {
		if ( ! communicator.isLoggedIn() )
			return this.$router.push( { name: 'login' } );

		this.refreshRealtimeUsers();
	},
	methods: {
		async refreshRealtimeUsers()
		{
			const realtimeUsersResponse	= await communicator.getRealtimeUsers();
			const userCount				= realtimeUsersResponse.data;

			this.realtimeUsers			= userCount.toString();
		}
	}
}
</script>

<style scoped>

</style>