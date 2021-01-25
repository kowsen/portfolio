<script>
    import { onMount } from 'svelte';
	import DOMPurify from 'dompurify';
	import marked from 'marked';

    export let id;

    let content;

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
                content.innerHTML = safeHtml;
            })
            .catch(() => {
                content.innerHTML = 'Post not found. Check your URL.';
            });
    });
</script>

<div class="content-container" bind:this={content}>
    <!-- Build spinner. Just a typing out "..." -->
</div>

<style>
    .content-container :global(img) {
        max-width: 100%;
    }
</style>