<template>
	<div v-if="show">
		{{ title }} {{ displayText }}
	</div>
</template>

<script>
export default {
	name: 'TypewriterText',
	data() {
		return {
			displayText	: '',
			textIndex	: 0,
			timeout		: null,
			show		: true
		};
	},
	/**
	 * @brief	Start typing
	 */
	created() {
		this.start();
	},
	/**
	 * @brief	Remove the timeout just in case
	 */
	beforeUnmount() {
		clearTimeout( this.timeout );
	},
	methods: {
		/**
		 * @brief	Starts the typewriting effect
		 *
		 * @return	void
		 */
		start()
		{
			if ( this.displayText.length === 0 )
				setTimeout( this.type, this.speed );
		},
		/**
		 * @brief	Types out the text recursively
		 *
		 * @return	void
		 */
		type()
		{
			if ( this.displayText.length !== this.text.length )
			{
				this.displayText	+= this.text.slice( this.textIndex, this.textIndex + this.chunks );
				this.textIndex		+=this.chunks;
				this.timeout	= setTimeout( this.type, this.speed );
			}
			else
			{
				this.timeout	= setTimeout(()=>{
					this.$emit( 'done-typing' );
					if ( this.removeAfter )
						this.show	= false;
				}, this.doneTypingTimeout );
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
		},
		doneTypingTimeout: {
			type: Number,
			default: 500
		},
		removeAfter: {
			type: Boolean,
			default: false
		}
	},
}
</script>

<style scoped>

</style>