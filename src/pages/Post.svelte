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
            .then(md => DOMPurify.sanitize(marked(md)))
            .then(html => {
                content.innerHTML = html;
            })
            .catch(() => {
                content.innerHTML = 'Post not found. Check your URL.';
            });
    });
</script>

<div bind:this={content}></div>

<style>

</style>