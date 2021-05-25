<template>
	<div>
		{{ title }} {{ displayText }}
	</div>
</template>

<script>
export default {
	name: "TypewriterText",
	data() {
		return {
			displayText	: '',
			textIndex	: 0
		};
	},
	created() {
		this.start();
	},
	methods: {
		start()
		{
			if ( this.displayText.length === 0 )
				setTimeout( this.type, this.speed );
		},
		type()
		{
			if ( this.displayText.length !== this.text.length )
			{
				this.displayText	+= this.text.slice( this.textIndex, this.textIndex + this.chunks );
				this.textIndex+=this.chunks;
				setTimeout( this.type, this.speed );
			}
		}
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: ''
		},
		chunks: {
			type: Number,
			default: 1
		},
		speed: {
			type: Number,
			default: 1
		}
	},
}
</script>

<style scoped>

</style>