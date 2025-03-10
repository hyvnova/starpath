<script lang="ts">
  import ConfigNav from "$lib/components/ConfigNav.svelte";
  import { faCog } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let data;
</script>

<ConfigNav />

<section>
  <h1 class="text-4xl font-bold text-center">Starpath</h1>

  <ol
    class="flex flex-col items-center justify-center
            border border-white rounded-md
            p-4 mt-8
        "
  >
    {#each data.id_and_titles as [id, title]}
      <li
        class="text-md text-center my-1.5 p-0.5
        border-white
        hover:border-b-2
        "
      >
        <a href={`read/${id}`} class="text-white">
          <span class="text-gray-300">{id}</span> - <i>{title}</i></a
        >
      </li>
    {/each}
  </ol>
</section>
