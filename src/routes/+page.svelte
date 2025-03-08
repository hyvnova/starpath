<script lang="ts">

    export let data;
</script>

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
