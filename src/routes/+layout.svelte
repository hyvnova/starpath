<script lang="ts">
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

		max-w-7xl mx-auto p-4 m-2
		rounded-lg shadow-lg
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