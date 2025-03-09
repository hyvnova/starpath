<script lang="ts">
  import SettingSection from "$lib/components/SettingSection.svelte";
  import SettingsLayout from "$lib/components/SettingsLayout.svelte";
  import user_config, { FONTS } from "$lib/stores/user_config";
  import { faHome } from "@fortawesome/free-solid-svg-icons";
  import ColorPicker from "svelte-awesome-color-picker";
  import Fa from "svelte-fa";

	

</script>

<SettingsLayout>
  <nav class="absolute top-8 right-8 m-0 p-0">
    <a href="/" class="text-gray-500 hover:white" title="Settings">
      <Fa icon={faHome} class="text-2xl" />
    </a>
  </nav>
  <!-- Appareance -->
  <SettingSection
    title="Apariencia"
    description="Cambia los estilos de la pagina"
  >
    <!-- Font family select -->
    <div class="my-2">
      <label for="font-family" class="text-gray-300 m-1 font-bold">Fuente</label
      >
      <select
        class="p-2 border-gray-700 rounded-md text-gray-200 w-64 m-1 bg-black"
        bind:value={$user_config.font}
      >
        {#each FONTS as font}
          <option value={font}>{font}</option>
        {/each}
      </select>
    </div>

    <!-- Font size  -->
    <div class="my-2">
      <label for="font-size" class="text-gray-300 m-1 font-bold"
        >Tamaño de fuente</label
      >
      <input
        type="number"
        min="8"
        max="32"
        class="p-2 border-gray-700 rounded-md text-gray-200 m-1 max-w-[5em] bg-black"
        bind:value={$user_config.font_size}
      />
    </div>

    <!-- Background color -->
    <div class="my-2 flex flex-col dark">
      <label for="font-size" class="text-gray-300 m-1 font-bold text-center"
        >Color de fondo</label
      >
      <ColorPicker
        position="responsive"
		textInputModes={['hex']}
		isAlpha={false}
		nullable={false}
		isDialog={false}
		bind:hex={$user_config.background}
		
		on:input={(event) => {
			user_config.update(config => {
				config.background = event.detail.hex as string;
				config.background_history.push(event.detail.hex as string);

				return config;
			})
		}}
      />
    </div>


	<!-- Text Color-->
	<div class="my-2 flex flex-col dark">
      <label for="font-size" class="text-gray-300 m-1 font-bold text-center"
        >Color de fondo</label
      >
      <ColorPicker
        position="responsive"
		textInputModes={['hex']}
		isAlpha={false}
		nullable={false}
		isDialog={false}
		
		bind:hex={$user_config.color}
		
		on:input={(event) => {
			user_config.update(config => {
				config.color = event.detail.hex as string;
				config.color_history.push(event.detail.hex as string);

				return config;
			})
		}}
      />
    </div>

  </SettingSection>
</SettingsLayout>


<style>
	.dark {
		--cp-bg-color: #222;
		--cp-border-color: black;
		--cp-text-color: white;
		--cp-input-color: #444;
		--cp-button-hover-color: #777;
	}</style>