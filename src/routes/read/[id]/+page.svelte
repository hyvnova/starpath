<script lang="ts">
  import ConfigNav from "$lib/components/ConfigNav.svelte";
  import PageControl from "$lib/components/PageControl.svelte";

  export let data;
</script>

<ConfigNav home={true} />

<div
  class="flex flex-col justify-center text-balance
        p-4 m-2
        max-w-7xl mx-auto
        "
>
  <PageControl id={data.id} />

  {@html data.content}

  <PageControl id={data.id} />
</div>

<!--
    Markdown
-->
<style>
  :global(html) {
    color: #333;
    line-height: 1.6;
    /* Puedes ajustar márgenes o paddings globales si lo deseas */
  }

  :global(body) {
    margin: 0;
    padding: 1rem;
  }

  /* Encabezados */
  :global(h1),
  :global(h2) {
    font-size: 2em;
    text-align: center;
  }

  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    font-weight: bold;
    margin-top: 1.2em;
    margin-bottom: 0.5em;
    line-height: 1.2;
  }

  /* Párrafos */
  :global(p) {
    margin: 0.8em 0;
  }

  /* Listas */
  :global(ul),
  :global(ol) {
    margin: 0.8em 0;
    padding-left: 1.5em;
  }
  :global(li) {
    margin: 0.4em 0;
  }

  /* Citas */
  :global(blockquote) {
    margin: 1em 0;
    padding: 0.5em 1em;
    background-color: #f6f8fa;
    border-left: 4px solid #dfe2e5;
    color: #6a737d;
  }

  /* Separadores horizontales */
  :global(hr) {
    border: none;
    border-top: 1px solid #dfe2e5;
    margin: 1em 0;
  }
</style>
