<script>
	import { Link } from 'svelte-routing';
	import Nav from './Nav.svelte';
	import Description from './Description.svelte';
</script>

<div class="title">
	<h1>KYLE OWSEN</h1>
	<Description />
</div>

<Nav />

<style>
	.title {
		display: flex;
		align-items: center;
	}

	h1 {
		margin-right: auto;
	}
</style>