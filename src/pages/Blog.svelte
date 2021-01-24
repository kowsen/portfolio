<script>
    import { Link } from "svelte-routing";

    const posts = [...__posts].sort((a, b) => getTime(b.date) - getTime(a.date));

    function getTime(dateStr) {
        const splitDateStr = dateStr.split('/');
        return new Date(splitDateStr[2], splitDateStr[0] - 1, splitDateStr[1]).getTime();
    }

    function getId(index) {
        return `${index}`.padStart(3, '0');
    }
</script>

<main>
    {#each posts as post}
        <Link to="blog/{post.id}"><p>{post.title}</p></Link>
    {/each}
</main>

<style>

</style>