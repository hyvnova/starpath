<script lang="ts">
 	 import user_config from '$lib/stores/user_config';
	import '../app.css';
	import { cubicOut } from 'svelte/easing';


	let { children } = $props();

	// Custom swipe transition: moves the element from 100% (off-screen) to 0%
	export function swipe(node: HTMLElement, { delay = 0, duration = 600, easing = cubicOut } = {}) {
		return {
			delay,
			duration,
			easing,
			css: (t: number) => {
				// As t goes from 0 to 1, the element moves from 100% to 0% horizontally.
				const translate = (1 - t) * 100;
				return `transform: translateX(${translate}%);`;
			}
		};
	}
</script>

<!-- Apply the custom swipe transition -->
<main transition:swipe
	class="bg-black min-h-screen 
		flex flex-col items-center justify-center
		text-white font-mono text-lg

		max-w-7xl mx-auto 
		rounded-lg shadow-lg
	"

	style="
		font-family:{$user_config.font} !important; 
		font-size:{$user_config.font_size}px !important;
		background:{$user_config.background};
		color:{$user_config.color};
		"
>
	{@render children()}
</main>


<style>
	* {
		font-family: "Fira Code", monospace;
		box-sizing: border-box;
	}

</style>