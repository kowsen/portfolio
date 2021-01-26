<script>
	import { Link } from 'svelte-routing';
	import Nav from './Nav.svelte';
	import Description from './Description.svelte';
</script>

<div class="title">
	<Link to="/" class="title-link">
		<h1>KYLE OWSEN</h1>
	</Link>
	<Description />
</div>

<Nav />

<style>
	.title {
		display: flex;
		align-items: center;
	}

	h1 {
		margin: 0;
		white-space: nowrap;
	}

	:global(.title-link) {
		text-decoration: none;
		user-select: none;
	}
</style>