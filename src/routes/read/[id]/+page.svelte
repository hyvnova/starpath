<script lang="ts">
  import PageControl from "$lib/components/PageControl.svelte";
  import { faCog } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let data;
</script>

<div
  class="flex flex-col justify-center text-balance
        p-4 m-2
        max-w-7xl mx-auto
        "
>
  <nav>
    <a
      href="/settings"
      class="rotate text-gray-400 hover:text-gray-100"
      title="Settings"
    >
      <Fa icon={faCog} class="text-2xl" />
    </a>

    <PageControl id={data.id} />
  </nav>

  {@html data.content}

  <PageControl id={data.id} />
</div>

<!--
    Add styles so that markdown content is displayed properly
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

  /* Enlaces */
  :global(a) {
    color: #0366d6;
    text-decoration: none;
  }
  :global(a:hover) {
    text-decoration: underline;
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

  /* Código en línea */
  :global(code) {
    background-color: #f6f8fa;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: monospace;
  }

  /* Bloques de código */
  :global(pre) {
    background-color: #f6f8fa;
    padding: 1em;
    overflow: auto;
    border-radius: 3px;
  }

  /* Separadores horizontales */
  :global(hr) {
    border: none;
    border-top: 1px solid #dfe2e5;
    margin: 1em 0;
  }
</style>
