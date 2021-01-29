<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';
  import Blog from './pages/Blog.svelte';
  import Post from './pages/Post.svelte';
  import Error from './pages/Error.svelte';
  import Header from './Header.svelte';

  import './styles/overrides.scss';
  import './styles/scale.scss';
  import './styles/scroll.scss';

  export let url = '';

  new ResizeObserver(([event]) => {
    document.documentElement.style.setProperty(
      '--page-width',
      event.contentRect.width
    );
  }).observe(document.documentElement);
</script>

<div class="content">
  <Router {url}>
    <Header />

    <main>
      <Route path="/">
        <Home />
      </Route>

      <Route path="about">
        <About />
      </Route>

      <Route path="contact">
        <Contact />
      </Route>

      <Route path="blog">
        <Blog />
      </Route>

      <Route path="blog/:id" let:params>
        <Post id={params.id} />
      </Route>

      <Route>
        <Error />
      </Route>
    </main>
  </Router>
</div>

<style>
  .content {
    padding: 24px 24px 0 24px;
    display: grid;
    row-gap: 16px;
  }

  main {
    margin-top: 8px;
    margin-bottom: 24px;
  }
</style>
