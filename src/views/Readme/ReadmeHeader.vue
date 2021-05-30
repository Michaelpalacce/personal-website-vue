<template>
	<a :href="href">
			<span class="text-3xl text-blue-500">{{ text }}
				<TypewriterText
					class="opacity-60 text-sm text-white inline-block"
					title="sg@website $ "
					:text="command"
					@done-typing="$emit( 'done-typing' )"
					:doneTypingTimeout="200"
					:speed="10"
				/>
			</span>
	</a>
</template>

<script>
import TypewriterText	from "../Components/Effects/TypewriterText";

export default {
	name: "ReadmeHeader",
	components: {TypewriterText},
	props: {
		href: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		command: {
			type: String,
			default: ''
		},
	}
}
</script>

<style scoped>

</style>