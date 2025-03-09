<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<section
	class="container flex flex-col justify-center items-center
			w-full p-2 mt-2
			rounded-lg
			bg-gray-900
		"
>
	<h2 class="text-2xl text-gray-200 m-1">{title}</h2>

	<p class="text-gray-300 m-1 text-pretty">
		{description}
	</p>

	<hr class="mb-8" />

	<slot />
</section>
