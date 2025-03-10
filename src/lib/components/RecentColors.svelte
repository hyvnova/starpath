<script lang="ts">
  import type { ColorHistory } from "$lib/stores/user_config";
  import type { Writable } from "stream";

    // History of colors in hex
    export let colors: ColorHistory; 

    // Function that, when called given a color, set's the color 
    export let set_color: (color: string) => void;
</script>

<div
    class="flex flex-row justify-center items-center
    p-1 m-1 
    rounded-md
    bg-[#222] text-white
    max-w-md
    "
>
    {#each colors as  color}
        
        <button
            style="background-color: {color}"
            class="rounded-md w-16 h-12
                flex items-center justify-center
                border-0 border-white
                hover:border-2
                hover:cursor-pointer
                mx-2
            "  
        
            on:click={() => {
                set_color(color);
            }}
        >
            <p
                class="font-thin text-sm text-gray-400"
            >
                {color}
            </p>
        </button>

    {/each}

</div>