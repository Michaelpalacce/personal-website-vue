<template>
	<div :class="{ fade: show, 'z-10': show, 'w-full': show, 'h-full': show, top: 0 }"></div>
</template>

<script>
export default {
	name: "Cover",
	data: () => {
		return {
			show	: false,
		};
	},
	created()
	{
		/**
		 * @brief	Waits for cover events that can set the state of the
		 */
		this.emitter.on( 'cover', () => {
			this.show	= true;
			setTimeout( ()=>{ this.show = false; }, 500 );
		});
	}
}
</script>

<style scoped>
.fade{
	position: absolute;
	animation: fade 500ms ease-in-out;
}

@keyframes fade{
	0%{background: transparent;}
	50%{background: #1F2937;} /* #1F2937 is the bg-gray-800 color */
	100%{background: transparent;}
}
</style>