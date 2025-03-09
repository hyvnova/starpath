<script lang="ts">
  import { faCog } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';


    export let data;
</script>

<nav
  class="absolute top-8 right-8"
>
    <a
      href="/settings"
      class="rotate text-gray-500 hover:white"
      title="Settings"
    >
      <Fa icon={faCog} class="text-2xl" />
    </a>

</nav>

<section>
  <h1 class="text-4xl font-bold text-center">Starpath</h1>

  <ol
    class="flex flex-col items-center justify-center
            border border-white rounded-md
            p-4 mt-8
        "
  >
    {#each data.titles as title, i}
    <li class="text-md text-center my-1.5
        border-white 
        hover:border-b-2      
        "
    >
      <a href={`read/${i}`} class="text-white"> <span class="text-gray-300">{i}</span> - <i>{title}</i></a>
    </li>
    {/each}

</ol>
  
</section>
