<template>
	<div :class="{ fade: shouldFade, 'z-10': shouldFade, 'w-full': shouldFade, 'h-full': shouldFade, top: 0 }"></div>
</template>

<script>
export default {
	name: "Cover",
	data: () => {
		return {
			shouldFade	: false,
		};
	},
	created()
	{
		this.emitter.on( 'cover', ( state ) => {
			this.shouldFade	= state || true;
			setTimeout( ()=>{ this.shouldFade = !this.shouldFade; }, 500 );
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