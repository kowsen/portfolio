<script>
  import { onDestroy } from 'svelte';

  const LOADER_SEED = '...';
  const LOADER_INTERVAL = 200;

  let counter = 0;
  $: loadStr = LOADER_SEED.slice(0, counter % (LOADER_SEED.length + 1));

  const counterInterval = setInterval(() => {
    counter += 1;
  }, LOADER_INTERVAL);

  onDestroy(() => {
    clearInterval(counterInterval);
  });
</script>

<span>{loadStr}</span>

<style>
  span {
    font-size: 30px;
  }
</style>
