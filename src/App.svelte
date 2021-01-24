<script>
  import { Router, Route, Link } from 'svelte-routing';

  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';
  import Blog from './pages/Blog.svelte';
  import Post from './pages/Post.svelte';
  import Header from './Header.svelte';

  export let url = '';
</script>

<Header />

<Router url="{url}">
 <nav>
    <Link to="/">Home</Link>
    <Link to="blog">Blog</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
  </nav>
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

</style>