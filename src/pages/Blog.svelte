<script>
  import { Link } from 'svelte-routing';

  // eslint-disable-next-line no-undef
  const posts = [...__posts].sort((a, b) => getTime(b.date) - getTime(a.date));

  function getTime(dateStr) {
    const splitDateStr = dateStr.split('/');
    return new Date(
      splitDateStr[2],
      splitDateStr[0] - 1,
      splitDateStr[1]
    ).getTime();
  }
</script>

<main>
  <a class="rss" href="rss.xml">
    <div class="rss-img" />
  </a>
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

  .rss {
    float: right;
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .rss-img {
    width: 100%;
    height: 100%;
    background-image: url('assets/rss.png');
    background-size: cover;
    filter: invert(95%) sepia(65%) saturate(4128%) hue-rotate(301deg)
      brightness(100%) contrast(126%);
  }

  .rss-img:hover,
  :global(.rss:focus .rss-img) {
    filter: invert(68%) sepia(73%) saturate(1431%) hue-rotate(335deg)
      brightness(109%) contrast(101%);
  }
</style>
