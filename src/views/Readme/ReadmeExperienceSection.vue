<template>
	<!--				Desktop-->
	<div class="hidden lg:flex w-full">
		<p class="w-2/12">{{ lastSeen }}</p>
		<p class="w-2/12">{{ type }}</p>
		<p class="w-1/12">{{ reason }}</p>
		<p class="w-2/12">{{ object }}</p>
		<span class="w-5/12">
			<p v-html="message" :class="`${toggled ? 'truncate' : ''}`"></p>
			<span class="text-blue-500 cursor-pointer" @click="toggled = !toggled">{{ toggled ? 'Read More...' : 'Read Less...' }}</span>
		</span>
	</div>

	<!--				Mobile Design-->
	<div class="block lg:hidden w-full">
		<div class="flex my-2">
			<span class="w-1/4">LAST SEEN:</span> <p class="w-3/4">{{ lastSeen }}</p>
		</div>
		<div class="flex my-2">
			<span class="w-1/4">TYPE:</span> <p class="w-3/4">{{ type }}</p>
		</div>
		<div class="flex my-2">
			<span class="w-1/4">REASON:</span> <p class="w-3/4">{{ reason }}</p>
		</div>
		<div class="flex my-2">
			<span class="w-1/4">OBJECT:</span> <p class="w-3/4">{{ object }}</p>
		</div>
		<div class="flex my-2">
			<span class="w-1/4">MESSAGE:</span>
			<span class="w-3/4">
				<p v-html="message" :class="`${toggled ? 'truncate' : ''}`"></p>
				<span class="text-blue-500 cursor-pointer" @click="toggled = !toggled">{{ toggled ? 'Read More...' : 'Read Less...' }}</span>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "ReadmeExperienceSection",
	data: function ()
	{
		return {
			toggled	: true
		};
	},
	methods: {
		toggle()
		{

		}
	},
	props: {
		type: {
			type: String,
			default: ''
		},
		object: {
			type: String,
			default: ''
		},
		message: {
			type: String,
			default: ''
		},
		lastSeen: {
			type: String,
			default: ''
		},
		reason: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped>

</style>