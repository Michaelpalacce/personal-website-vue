<template>
	<div v-if="isVisible" class="lds-ring"><div></div><div></div><div></div><div></div></div>
</template>

<script>
export default {
	name: 'Loader',
	data: () => {
		return { isVisible: true }
	},
	methods: {
		hide() { this.isVisible	= false; },
		show() { this.isVisible	= true; }
	}
}
</script>

<style scoped>

</style>