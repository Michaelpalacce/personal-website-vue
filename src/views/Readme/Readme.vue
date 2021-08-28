<template>
	<div class="mx-20 my-20 grid grid-cols-1 gap-5">
		<ReadmeHeader href="#abilities" text="Abilities" :command="abilitiesCommand"/>
		<ReadmeHeader href="#experience" text="Experience" :command="experienceCommand"/>
		<ReadmeHeader href="#certificates" text="Certificates" :command="certificatesCommand"/>
		<ReadmeHeader href="#languages" text="Languages" :command="languagesCommand"/>
		<ReadmeHeader href="/CV" text="Curriculum vitae" :command="cvCommand"/>
	</div>

	<hr id="abilities"/>
	<transition name="readme">
		<div class="text-center sm:text-left m-5" v-if="show" >
			<span class="block text-4xl text-center font-semibold mt-10 mb-2">Abilities:</span>
			<p v-if="show" class="text-xs text-center mx-auto opacity-50 mb-10">Name: Technology; Ready: Rating out of 5; Status: Actively learning it or not; Age: Since when; Node: professionally or not</p>

			<div class="mx-auto text-center">
				<input
					type="text" placeholder="Filter Abilities"
					class="bg-transparent border-b border-gray border-opacity-75 w-1/2 h-10 outline-none"
					v-model="abilitiesFilter"
					ref="abilitiesInput"
					@keyup="$refs.abilitiesInput.scrollIntoView( { behavior: 'smooth' } )"
				>
			</div>

			<div v-for="ability in filteredAbilities">
				<span class="block text-xl text-center font-semibold mt-10">{{ ability.name }}</span>
				<p class="text-blue-500 cursor-pointer hover:text-blue-300 text-center mx-auto" @click="ability.shown = !ability.shown">
					<TypewriterText title="sg@website: " :text="ability.command" class="text-xs md:text-base inline-block" />
					<span class="inline-block ml-2 chevron"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg></span>
				</p>

				<transition name="ability">
					<div v-if="ability.shown">
						<div class="grid grid-cols-4 sm:grid-cols-5">
							<p @click="sortByName( ability.name )" class="cursor-pointer text-blue-500">NAME</p>
							<p @click="sortByReady( ability.name )" class="cursor-pointer text-blue-500">READY</p>
							<p>STATUS</p>
							<p>AGE</p>
							<p class="hidden sm:inline-block">NODE</p>
						</div>
						<div v-for="item in ability.filteredItems" class="grid grid-cols-4 sm:grid-cols-5 my-2">
							<p class="truncate">{{ item.name }}</p>
							<p class="truncate">{{ item.ready }}</p>
							<p class="truncate">{{ item.status }}</p>
							<p class="truncate">{{ item.age }}</p>
							<p class="truncate hidden sm:inline-block">{{ item.node }}</p>
						</div>
					</div>
				</transition>
			</div>
		</div>
	</transition>

	<hr id="experience">
	<transition name="experience">
		<div class="m-5 text-center sm:text-left" v-if="show">
			<span class="block text-4xl text-center font-semibold mt-10 mb-2">Experience:</span>
			<p v-if="show" class="text-xs text-center mx-auto opacity-50 mb-10">Last Seen: Working duration; Type: Position; Reason: Work/Internship/Course; Object: Employer/Location; Message: What did I do</p>

			<div class="hidden lg:flex">
				<p class="w-2/12">LAST SEEN</p>
				<p class="w-2/12">TYPE</p>
				<p class="w-1/12">REASON</p>
				<p class="w-2/12">OBJECT</p>
				<p class="w-5/12">MESSAGE</p>
			</div>

			<div class="lg:flex mb-5" v-for="experience in experiences">
				<ReadmeExperienceSection
					:lastSeen="experience.lastSeen"
					:message="experience.message"
					:type="experience.type"
					:object="experience.object"
					:reason="experience.reason"
				/>
			</div>
		</div>
	</transition>

	<hr id="certificates">
	<transition name="certificates">
		<div v-if="show" class="m-5 md:w-4/5 w-full mx-auto">
			<span class="text-center block text-4xl font-semibold my-10">Certificates:</span>

			<div class="mx-auto text-center">
				<input
					type="text" placeholder="Filter Certificates"
					class="bg-transparent border-b border-gray border-opacity-75 w-1/2 h-10 outline-none"
					v-model="certificatesFilter"
					ref="certificateInput"
					@keyup="$refs.certificateInput.scrollIntoView( { behavior: 'smooth' } )"
				>
			</div>
			<div class="grid lg:grid-cols-2">
				<transition-group name="filterCertificates">
					<div class="m-5 p-2 border" v-for="certificate in filteredCertificates" :key="certificate.name">
						<div class="grid grid-cols-2 mt-5">
							<span>Name:</span>
							<span class="text-red-600"> {{ certificate.name }}</span>
						</div>
						<div class="grid grid-cols-2 mt-5">
							<span>Namespace:</span>
							<span> {{ certificate.namespace }}</span>
						</div>
						<div class="grid grid-cols-2 mt-5">
							<span>Labels:</span>
							<div class="grid grid-cols-1">
								<p v-for="label in certificate.labels" class="mt-1">
									{{ label.key }}=<span v-if="!label.link">{{ label.value }}</span><a class="text-blue-500" :href="label.value" v-if="label.link === true">{{ label.linkName || label.value }}</a>
								</p>
							</div>
						</div>
						<p>Data</p>
						<p>====</p>
						<div v-for="data in certificate.data" class="mb-5">
							<p>{{ data.title }}</p>
							----
							<p>{{ data.text }}</p>
						</div>
					</div>
				</transition-group>
			</div>
		</div>
	</transition>

	<hr id="languages">
	<transition name="languages">
		<div class="m-5 mb-64" v-if="show">
			<span class="text-center block text-4xl font-semibold my-10">Languages:</span>
			<li v-for="language in languages" class="text-2xl font-medium">{{ language }}</li>
		</div>
	</transition>
</template>

<script>
import TypewriterText from "../Components/Effects/TypewriterText";
import ReadmeHeader from "./ReadmeHeader";
import ReadmeExperienceSection from "./ReadmeExperienceSection";
export default {
	name: 'Readme',
	components: {ReadmeExperienceSection, ReadmeHeader, TypewriterText},
	data: function ()
	{
		return {
			show: false,
			abilitiesCommand: './fetchAbilities.sh',
			languagesCommand: 'cat /etc/default/locale',
			experienceCommand: 'kubectl get events -n work-history',
			certificatesCommand: 'kubectl get cm | awk \'NR>1{print $1}\' | xargs kubectl describe cm',
			cvCommand: `wget ${window.location.host}/CV`,
			languages: this.$store.state.languages,
			experiences: this.$store.state.experiences,
			certificatesFilter: '',
			abilitiesFilter: ''
		};
	},
	async mounted() {
		if ( this.$route.hash )
			this.show	= true;

		this.$store.commit( 'animateNavbarText', { text: 'cd ~', remove: true, removeAfter: 200, callback: () => {
				this.$store.commit( 'changeNavbarPath', '~' )
				this.$store.commit( 'animateNavbarText', { text: `cat README.md && ${this.abilitiesCommand}`, speed: 20 } );
				this.show	= true;
			}
		});

		await this.$store.dispatch( 'populateAbilities' ).catch( console.log );
		await this.$store.dispatch( 'populateCertificates' ).catch( console.log );
	},
	methods:{
		/**
		 * @brief	Sorts abilities by how well I know them
		 *
		 * @param	{String} abilityName
		 *
		 * @return	void
		 */
		sortByReady( abilityName )
		{
			this.abilities.map(( ability ) => {
				if ( ability.name === abilityName )
					return ability.abilities.sort(( first, second ) => {
						const firstValue	= first.ready.split( '/' )[0];
						const secondValue	= second.ready.split( '/' )[0];

						return secondValue - firstValue;
					});

				return ability;
			});
		},
		/**
		 * @brief	Sorts abilities by alphabetical order
		 *
		 * @param	{String} abilityName
		 *
		 * @return	void
		 */
		sortByName( abilityName )
		{
			this.abilities.map(( ability ) => {
				if ( ability.name === abilityName )
					return ability.abilities.sort(( first, second ) => {
						const firstName		= first.name;
						const secondName	= second.name;

						return firstName > secondName ? 1 : secondName > firstName ? -1 : 0;
					});

				return ability;
			});
		}
	},
	computed: {
		abilities: function () { return this.$store.state.abilities; },
		certificates: function () { return this.$store.state.certificates; },

		/**
		 * @brief	Filters certificates according to a filter
		 *
		 * @details	Not the best search in the world since it JSON encodes the entire certificate object
		 * 			Both the certificate object and filter are toLowerCased so we are case insensitive
		 *
		 * @return	{Array}
		 */
		filteredCertificates()
		{
			return this.certificates.filter(( certificate ) => {
				return JSON.stringify( certificate ).toLowerCase().includes( this.certificatesFilter.toLowerCase() );
			});
		},

		/**
		 * @brief	Filters the abilities according to a filter
		 *
		 * @details	Will remove whole sections if they are empty
		 *
		 * @return	{Array}
		 */
		filteredAbilities()
		{
			const filtered	= this.abilities.filter(( ability ) => {
				ability.filteredItems	= ability.items.filter(( ability ) => {
					return JSON.stringify( ability ).toLowerCase().includes( this.abilitiesFilter.toLowerCase() )
				});

				ability.shown	= true;

				return ability.filteredItems.length > 0;
			});

			if ( this.abilitiesFilter === '' )
				filtered.map( ( ability, index ) => ability.shown = index === 0 )

			return filtered;
		}
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

.filterCertificates-enter-active,
.filterCertificates-leave-active {
	transition: opacity .25s ease;
}

.filterCertificates-enter-from,
.filterCertificates-leave-to {
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

.ability-enter-active,
.ability-leave-active {
	transition: opacity .25s ease;
}

.ability-enter-from,
.ability-leave-to {
	opacity: 0;
}

@keyframes slide {
	0%,
	100% {
		transform: translate(0, 0);
	}

	50% {
		transform: translate(0, 5px);
	}
}

.chevron{
	animation: slide 1s linear infinite;
}
</style>