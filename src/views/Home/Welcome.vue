<template>
	<div class="h-screen w-screen">
		<TypewriterText class="mx-5" :title="`sg@website: /${$route.name} $ ssh -i ssh.pem user@$(dig +short ${hostname})`" />
		<TypewriterText class="mx-5" :text="'The authenticity of host \'127.0.0.1 (127.0.0.1)\' can\'t be established.'" :chunks="3"/>
		<TypewriterText class="mx-5" :text="'ECDSA key fingerprint is SHA256:12ca17b49af2289436f303e01.'" :chunks="3"/>
		<TypewriterText class="mx-5 inline-block" :text="'Are you sure you want to continue connecting (yes/no/[fingerprint])?'" :chunks="3"/>
		<input id="answer" type="text" class="hidden sm:inline-block w-1/12 bg-transparent outline-none" @keyup.enter="onEnter" autofocus v-model="selection" v-if="answeredNo === false" >
		<TypewriterText class="mx-5" :text="'Host key verification failed.'" :chunks="10" v-if="answeredNo"/>
		<TypewriterText class="mx-5" :text="'Retry in 5 second...'" :chunks="10" v-if="answeredNo"/>
		<LinkComponent class="sm:hidden cursor-pointer" text="Yes" @click="onClick( 'y' )" v-if="answeredNo === false"/>
		<LinkComponent class="sm:hidden cursor-pointer" text="No" @click="onClick( 'n' )" v-if="answeredNo === false"/>
		<span class="sm:hidden opacity-60 text-xs absolute bottom-0">Site is better viewed on a desktop resolution, even tho there is a mobile design, some things may be missing or they may not be visible</span>
	</div>
</template>

<script>
import LinkComponent	from "../Components/LinkComponent";
import TypewriterText	from "../Components/Effects/TypewriterText";

export default {
	name: 'Welcome',
	data: () => {
		return {
			selection: '',
			answeredNo: false,
			yesAnswers: ['yes', 'ye', 'yas', 'y'],
			hostname: window.location.host
		}
	},
	mounted() {
		document.getElementById( 'answer' ).focus();
	},
	components: { TypewriterText, LinkComponent },
	methods: {
		onEnter() {
			if ( this.yesAnswers.includes( this.selection.toLowerCase() ) ) {
				this.emitter.emit( 'cover' );
				this.selection	= '';
				setTimeout(()=>{ this.$store.commit( 'seenWelcomeScreen' ); }, 250);
			}
			else {
				this.answeredNo	= true;
				setTimeout( () => { this.$router.go() }, 5000 );
			}
		},
		onClick( selection ) {
			this.selection	= selection;
			this.onEnter();
		}
	}
}
</script>

<style scoped>
</style>