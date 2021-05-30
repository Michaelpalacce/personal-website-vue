<template>
	<transition name="readme">
		<div class="text-center my-5" v-if="showAbilities">
			<div class="grid grid-cols-4 sm:grid-cols-5">
				<p @click="sortByName" class="cursor-pointer text-blue-500">NAME</p>
				<p @click="sortByReady" class="cursor-pointer text-blue-500">READY</p>
				<p>STATUS</p>
				<p>AGE</p>
				<p class="hidden sm:inline-block">NODE</p>
			</div>
			<div v-for="ability in abilities" class="grid grid-cols-4 sm:grid-cols-5 my-2">
				<p class="truncate">{{ ability.name }}</p>
				<p class="truncate">{{ ability.ready }}</p>
				<p class="truncate">{{ ability.status }}</p>
				<p class="truncate">{{ ability.age }}</p>
				<p class="truncate hidden sm:inline-block">{{ ability.node }}</p>
			</div>
		</div>
	</transition>
	<p v-if="showAbilities" class="text-xs text-center mx-auto opacity-50">Name: Technology; Ready: Rating out of 5; Status: Actively learning it or not; Age: Since when; Node: professionally or not</p>

	<TypewriterText class="mt-20 m-5 p-2"
					v-if="showAbilities && ! showCertificates"
					title="sg@website"
					text="kubectl get cm | awk 'NR>1{print $1}' | xargs kubectl describe cm"
					@done-typing="showCertificates = true"
					:doneTypingTimeout="1000"
					:speed="10"
	/>
	<transition name="certificates">
		<div v-if="showCertificates" class="mt-20 md:w-4/5 w-full mx-auto" id="certificates">
			<div class="m-5 p-2 border" v-for="certificate in certificates">
				<div class="grid grid-cols-2 md:grid-cols-5 mt-5">
					<span>Name:</span>
					<span> {{ certificate.name }}</span>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-5 mt-5">
					<span>Namespace:</span>
					<span> {{ certificate.namespace }}</span>
				</div>
				<div class="grid grid-cols-2 md:grid-cols-5 mt-5">
					<span>Labels:</span>
					<div class="grid grid-cols-1">
						<p v-for="label in certificate.labels">
							{{ label.key }}=<span v-if="!label.link">{{ label.value }}</span><a class="text-blue-500" :href="label.value" v-if="label.link === true">{{ label.linkName || label.value }}</a>
						</p>
					</div>
				</div>
				<p>Data</p>
				<p>====</p>
				<div v-for="data in certificate.data" class="mb-10">
					<p>{{ data.title }}</p>
					----
					<p>{{ data.text }}</p>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import TypewriterText from "../Components/Effects/TypewriterText";
export default {
	name: 'Readme',
	components: {TypewriterText},
	data: function ()
	{
		return {
			showAbilities: false,
			showCertificates: false,
			abilities: this.$store.state.abilities,
			certificates: this.$store.state.certificates
		};
	},
	mounted()
	{
		if ( this.$route.hash )
		{
			this.showAbilities		= true;
			this.showCertificates	= true;
		}

		this.$store.commit( 'animateNavbarText', { text: 'cd ~', remove: true, removeAfter: 200, callback: () => {
				this.showAbilities	= true;

				this.$store.commit( 'changeNavbarPath', '~' )
				this.$store.commit( 'animateNavbarText', { text: 'kubectl get po -n readme && cat legend.txt', speed: 20 } );
			}
		});
	},
	methods:{
		/**
		 * @brief	Sorts abilities by how well I know them
		 */
		sortByReady()
		{
			this.abilities.sort(( first, second ) => {
				const firstValue	= first.ready.split( '/' )[0];
				const secondValue	= second.ready.split( '/' )[0];

				return secondValue - firstValue;
			});
		},
		/**
		 * @brief	Sorts abilities by alphabetical order
		 *
		 * @return	void
		 */
		sortByName()
		{
			this.abilities.sort(( first, second ) => {
				const firstName		= first.name;
				const secondName	= second.name;

				return firstName > secondName ? 1 : secondName > firstName ? -1 : 0;
			});
		},
	}
}
</script>

<style scoped>
.readme-enter-active,
.readme-leave-active {
	transition: opacity 1s ease;
}

.readme-enter-from,
.readme-leave-to {
	opacity: 0;
}

.certificates-enter-active,
.certificates-leave-active {
	transition: opacity 1s ease;
}

.certificates-enter-from,
.certificates-leave-to {
	opacity: 0;
}
</style>