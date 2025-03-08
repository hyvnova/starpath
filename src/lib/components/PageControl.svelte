<script lang="ts">
  import last_chapter_id from "$lib/stores/last_chapter_id";

  let { id } = $props();
</script>

<div
  class="flex flex-row justify-center items-center
        mx-auto
    "
>
  <!-- Previous -->
  {#if id > 0}
    <a
      href={`/read/${id - 1}`}
      class="text-white
                p-1 m-1 px-4
                "
    >
      <p title="Capitulo Anterior">&larr;</p>
    </a>
  {/if}

  <!-- Next -->
   {#if id+1 <= last_chapter_id}
  <a
    href={`/read/${id + 1}`}
    class=" text-white
            p-1 m-1 px-4
            "
  >
    <p title="Capitulo Siguiente">&rarr;</p>
  </a>
  {/if}
</div>
