<template>
	<router-link :class="componentClass" :to="href" v-if="href">{{ text }}</router-link>
	<div :class="componentClass" v-else>{{ text }}</div>
</template>

<script>
export default {
	name: "LinkComponent",
	data: function () {
		return {
			componentClass: `font-semibold px-3 py-2 mx-2 ${this.textColor} ${this.blink ? 'animated-cursor border-r-4' : ''}`
		};
	},
	props: {
		href: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		textColor: {
			type: String,
			default: 'text-white'
		},
		blink: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.animated-cursor{
	animation: animated-cursor 800ms infinite;
}

@keyframes animated-cursor{
	from{border-right-color: white;}
	to{border-right-color: transparent;}
}
</style>