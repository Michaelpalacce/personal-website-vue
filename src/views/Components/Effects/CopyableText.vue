<template>
	<span :ref="refName" @click="copy" class="cursor-pointer" :class="textColor">
		{{ text }}
		<span class="inline-block my-auto">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
			</svg>
		</span>
	</span>
</template>

<script>
export default {
	name: 'CopyableText',
	data: function ()
	{
		return {
			refName: `copyText${Math.random()}`
		};
	},
	methods: {
		copy()
		{
			const selection	= window.getSelection();
			const range		= document.createRange();

			range.selectNodeContents( this.$refs[this.refName] );
			selection.removeAllRanges();
			selection.addRange( range );
			document.execCommand( 'copy' );
			selection.removeAllRanges();
		}
	},
	props: {
		text: {
			type: String,
			default: ''
		},
		textColor: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped>

</style>