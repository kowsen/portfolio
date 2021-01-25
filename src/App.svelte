<script>
  import { Router, Route } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';
  import Blog from './pages/Blog.svelte';
  import Post from './pages/Post.svelte';
  import Header from './Header.svelte';

  export let url = '';

  const MIN_SUPPORTED_SIZE = 320;
  const MIN_LOGICAL_WIDTH = 473;

  new ResizeObserver(() => {
    const width = Math.max(document.documentElement.clientWidth, MIN_SUPPORTED_SIZE);
    const scale = Math.min(width / MIN_LOGICAL_WIDTH, 1);
    document.documentElement.style.transform = `scale(${scale})`;
  }).observe(document.documentElement);
</script>

<Router url="{url}">
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
  		<Post id="{params.id}" />
  	</Route>
  </main>
</Router>

<style>
  main {
    margin-top: 8px;
    margin-bottom: 24px;
  }
</style>