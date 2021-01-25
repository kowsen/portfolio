<script>
    import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import marked from 'marked';
    import Spinner from './Spinner.svelte';

    export let id;

    let content = '';

    onMount(() => {
        fetch(`${location.origin}/posts/${id}.md`)
            .then(res => {
                if(res.ok) {
                    return res;
                } else {
                    throw Error(`Request rejected with status ${res.status}`);
                }
            })
            .then(res => res.text())
            .then(md => marked(md))
            .then(html => DOMPurify.sanitize(html))
            .then(safeHtml => {
                content = safeHtml;
            })
            .catch(() => {
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