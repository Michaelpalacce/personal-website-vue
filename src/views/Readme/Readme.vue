<template>
	<div class="mx-20 my-20 grid grid-cols-1 gap-5">
		<ReadmeHeader href="#abilities" text="Abilities" :command="abilitiesCommand" @done-typing="showAbilities = true"/>
		<ReadmeHeader href="#languages" text="Languages" :command="languagesCommand" @done-typing="showLanguages = true"/>
		<ReadmeHeader href="#experience" text="Experience" :command="experienceCommand" @done-typing="showExperience = true"/>
		<ReadmeHeader href="#certificates" text="Certificates" :command="certificatesCommand" @done-typing="showCertificates = true"/>
	</div>

	<hr id="abilities"/>
	<transition name="readme">
		<div class="text-center m-5" v-if="showAbilities" >
			<span class="text-center block text-4xl font-semibold my-10">Abilities:</span>

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

	<hr id="languages">
	<transition name="languages">
		<div class="m-5" v-if="showLanguages">
			<span class="text-center block text-4xl font-semibold my-10">Languages:</span>
			<li v-for="language in languages" class="text-2xl font-medium">{{ language }}</li>
		</div>
	</transition>

	<hr id="experience">
	<transition name="experience">
		<div class="m-5 text-center" v-if="showExperience">
			<span class="block text-4xl font-semibold my-10">Experience:</span>

			<div class="hidden lg:flex">
				<p class="w-2/12">LAST SEEN</p>
				<p class="w-2/12">TYPE</p>
				<p class="w-1/12">REASON</p>
				<p class="w-2/12">OBJECT</p>
				<p class="w-5/12">MESSAGE</p>
			</div>

			<div class="lg:flex mb-5" v-for="experience in experiences">
<!--				Desktop-->
				<div class="hidden lg:flex w-full">
					<p class="w-2/12">{{ experience.lastSeen }}</p>
					<p class="w-2/12">{{ experience.type }}</p>
					<p class="w-1/12">{{ experience.reason }}</p>
					<p class="w-2/12">{{ experience.object }}</p>
					<p class="w-5/12">{{ experience.message }}</p>
				</div>

<!--				Mobile Design-->
				<div class="block lg:hidden w-full">
					<div class="flex my-2">
						<span class="w-1/4">LAST SEEN:</span> <p class="w-3/4">{{ experience.lastSeen }}</p>
					</div>
					<div class="flex my-2">
						<span class="w-1/4">TYPE:</span> <p class="w-3/4">{{ experience.type }}</p>
					</div>
					<div class="flex my-2">
						<span class="w-1/4">REASON:</span> <p class="w-3/4">{{ experience.reason }}</p>
					</div>
					<div class="flex my-2">
						<span class="w-1/4">OBJECT:</span> <p class="w-3/4">{{ experience.object }}</p>
					</div>
					<div class="flex my-2">
						<span class="w-1/4">MESSAGE:</span> <p class="w-3/4">{{ experience.message }}</p>
					</div>
				</div>
			</div>
		</div>
	</transition>
	<p v-if="showExperience" class="text-xs text-center mx-auto opacity-50">Last Seen: Working duration; Type: Position; Reason: Work/Internship/Course; Object: Employer/Location; Message: What did I do</p>

	<hr id="certificates">
	<transition name="certificates">
		<div v-if="showCertificates" class="m-5 md:w-4/5 w-full mx-auto">
			<span class="text-center block text-4xl font-semibold my-10">Certificates:</span>

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
import ReadmeHeader from "./ReadmeHeader";
export default {
	name: 'Readme',
	components: {ReadmeHeader, TypewriterText},
	data: function ()
	{
		return {
			showAbilities: false,
			showLanguages: false,
			showExperience: false,
			showCertificates: false,
			abilitiesCommand: 'kubectl get po -n readme',
			languagesCommand: 'cat /etc/default/locale',
			experienceCommand: 'kubectl get events -n work-history',
			certificatesCommand: 'kubectl get cm | awk \'NR>1{print $1}\' | xargs kubectl describe cm',
			abilities: this.$store.state.abilities,
			languages: this.$store.state.languages,
			experiences: this.$store.state.experiences,
			certificates: this.$store.state.certificates
		};
	},
	mounted()
	{
		if ( this.$route.hash )
		{
			this.showAbilities		= true;
			this.showCertificates	= true;
			this.showExperience		= true;
			this.showLanguages		= true;
		}

		this.$store.commit( 'animateNavbarText', { text: 'cd ~', remove: true, removeAfter: 200, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~' )
				this.$store.commit( 'animateNavbarText', { text: `${this.abilitiesCommand} && cat legend.txt`, speed: 20 } );
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

.languages-enter-active,
.languages-leave-active {
	transition: opacity 1s ease;
}

.languages-enter-from,
.languages-leave-to {
	opacity: 0;
}

.experience-enter-active,
.experience-leave-active {
	transition: opacity 1s ease;
}

.experience-enter-from,
.experience-leave-to {
	opacity: 0;
}
</style>