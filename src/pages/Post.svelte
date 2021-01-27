<script>
  import { onMount } from 'svelte';
  import Spinner from './Spinner.svelte';

  export let id;

  let content = '';

  async function parseMarkdown(md) {
    // eslint-disable import/first
    const markdownUtil = await import('../util/markdown');
    return markdownUtil.parseMarkdown(md);
  }

  onMount(() => {
    fetch(`${location.origin}/posts/${id}.md`)
      .then((res) => {
        if (res.ok) {
          return res;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((res) => res.text())
      .then((md) => parseMarkdown(md))
      .then((safeHtml) => {
        content = safeHtml;
      })
      .catch((e) => {
        console.log(e);
        content = 'Post not found. Check your URL.';
      });
  });
</script>

<div class="content-container">
  {#if content}
    {@html content}
  {:else}
    <Spinner />
  {/if}
</div>

<style>
  .content-container :global(img) {
    max-width: 100%;
  }

  .content-container > :global(h2:first-child) {
    margin-top: 0;
  }
</style>
