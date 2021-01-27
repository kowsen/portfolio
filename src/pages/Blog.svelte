<script>
  import { Link } from 'svelte-routing'

  // eslint-disable-next-line no-undef
  const posts = [...__posts].sort(
    (a, b) => getTime(b.date) - getTime(a.date)
  )

  function getTime(dateStr) {
    const splitDateStr = dateStr.split('/')
    return new Date(
      splitDateStr[2],
      splitDateStr[0] - 1,
      splitDateStr[1]
    ).getTime()
  }
</script>

<main>
  {#each posts as post}
    <div class="post-container">
      <Link to="blog/{post.id}" class="font-bold">{post.title}</Link> ({post.date})
    </div>
  {/each}
</main>

<style>
  .post-container {
    margin: 4px 0;
  }
</style>
