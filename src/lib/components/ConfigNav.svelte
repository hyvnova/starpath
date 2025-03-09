<script lang="ts">
  import { faCog, faHome } from "@fortawesome/free-solid-svg-icons";

  export let home: boolean = false;

  import Fa from "svelte-fa";

</script>
<nav
  class="absolute top-8 right-8 flex"
>

    {#if home}
        <a
      href="/"
      class="text-gray-300 hover:white mr-8"
      title="Home / Index"
    >
      <Fa icon={faHome} class="text-2xl" />
    </a>

    {/if}

    <a
      href="/settings"
      class="rotate text-gray-300 hover:white"
      title="Settings"
    >
      <Fa icon={faCog} class="text-2xl" />
    </a>


</nav>