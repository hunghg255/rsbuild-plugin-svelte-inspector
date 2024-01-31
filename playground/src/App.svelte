<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import viteLogo from '/rsbuild.svg';
  import Counter from './Counter.svelte';
</script>

<main id="app">
  <div>
    <a href="https://rsbuild.dev/" target="_blank" rel="noreferrer">
      <img
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rsbuild/navbar-logo-dark-10164.png"
        class="logo"
        alt="Rsbuild Logo"
      />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Rsbuild + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a
      href="https://github.com/sveltejs/kit#readme"
      target="_blank"
      rel="noreferrer">SvelteKit</a
    >, the official Svelte app framework powered by Rsbuild!
  </p>

  <p class="read-the-docs">
    Click on the Rsbuild and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
