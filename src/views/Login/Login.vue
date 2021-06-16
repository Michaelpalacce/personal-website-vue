<template>
	<div class="mx-5 my-5 ">
		<TypewriterText class="inline-block" :title="`sg@website: /root $ `" text="su -p " :speed="25" />
		<input ref="username" type="text" class="ml-5 inline-block w-1/12 bg-transparent outline-none" @keyup.enter.native="submitUsername" v-model="username" :readonly="usernameSubmitted">
		<div v-if="usernameSubmitted">
			<TypewriterText class="inline-block" text="Password: " :speed="25"/>
			<input ref="password" type="text" class="ml-5 inline-block w-1/12 bg-transparent outline-none" @keyup.enter.native="signIn" v-model="password" :readonly="passwordSubmitted">
		</div>
		<TypewriterText :text="errorMessage" v-if="errorMessage"/>
	</div>
</template>

<script>
import communicator		from "@/app/main/communicator";
import TypewriterText	from "../Components/Effects/TypewriterText";

export default {
	name: 'Login',
	components: {TypewriterText},
	data: () => {
		return {
			username: '',
			password: '',
			usernameSubmitted: false,
			passwordSubmitted: false,
			errorMessage: ''
		};
	},
	mounted() {
		if ( communicator.loggedIn() )
			this.$router.push( { name: 'home' } );

		this.$store.commit( 'animateNavbarText', { text: 'cd ~', remove: true, speed: 25, removeAfter: 500, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~' );
			}
		});

		this.$refs.username.focus();
	},
	methods: {
		/**
		 * @return	void
		 */
		signIn()
		{
			if ( this.passwordSubmitted )
				return;

			this.passwordSubmitted	= true;

			communicator.login( this.username, this.password ).then(( response )=>{
				this.$router.push( { name: 'home' } );
			}).catch(( error ) => {
				this.errorMessage	= 'su: Authentication failure';
			});
		},

		/**
		 * @brief	Shows the password input
		 *
		 * @return	void
		 */
		submitUsername()
		{
			this.usernameSubmitted	= true;
			setImmediate(()=>{
				this.$refs.password.focus();
			});
		}
	}
}
</script>

<style scoped>

</style>