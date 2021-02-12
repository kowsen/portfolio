<script>
  import { navigate } from 'svelte-routing';
  import Spinner from '../util/Spinner.svelte';

  export let id;

  let content = '';

  async function parseMarkdown(md) {
    // eslint-disable import/first
    const markdownUtil = await import('../util/markdown');
    return markdownUtil.parseMarkdown(md);
  }

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
    .catch(() => {
      navigate('/invalid-post', { replace: true });
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
  .content-container :global(h3) {
    padding-bottom: 0.25em;
    border-bottom: 1px solid #b7a082;
    margin-top: 1.5em;
    margin-bottom: 1em;
  }

  .content-container :global(img) {
    max-width: 100%;
  }

  .content-container > :global(h2:first-child) {
    margin-top: 0;
  }
</style>
