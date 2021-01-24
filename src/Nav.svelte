<script>
	  import { Link } from 'svelte-routing';
</script>

<nav>
	<Link to="/" class="nav-item">
		<div class="nav-item-content">
			Home
		</div>
	</Link>
	<Link to="blog" class="nav-item">
		<div class="nav-item-content">
			Blog
		</div>
	</Link>
	<Link to="about" class="nav-item">
		<div class="nav-item-content">
			About
		</div>
	</Link>
	<Link to="contact" class="nav-item">
		<div class="nav-item-content">
			Contact
		</div>
	</Link>
</nav>

<style>
	nav {
		display: flex;
		background-color: #ffc984;
	}

	.nav-item-content {
		display: flex;
		text-align: center;
	    height: 28px;
	    align-items: center;
	    justify-content: center;
	}

	.nav-item-content:hover, :global(.nav-item:focus .nav-item-content) {
		background-color: #ffa635;
	}

	:global(.nav-item) {
		text-decoration: none;
		flex-grow: 1;
	}
</style>