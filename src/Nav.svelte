<script>
  import { Link } from 'svelte-routing';
</script>

<nav>
  <Link to="/" class="nav-item">
    <div class="nav-item-content">Home</div>
  </Link>
  <Link to="blog" class="nav-item">
    <div class="nav-item-content">Blog</div>
  </Link>
  <Link to="about" class="nav-item">
    <div class="nav-item-content">About</div>
  </Link>
  <Link to="contact" class="nav-item">
    <div class="nav-item-content">Contact</div>
  </Link>
</nav>

<style>
  nav {
    display: flex;
    background-color: #ffc984;
    user-select: none;
  }

  .nav-item-content {
    display: flex;
    text-align: center;
    height: 28px;
    align-items: center;
    justify-content: center;
  }

  .nav-item-content:hover,
  :global(.nav-item:focus .nav-item-content),
  :global(.nav-item[aria-current='page'] .nav-item-content) {
    background-color: #ffa635;
  }

  :global(.nav-item) {
    position: relative;
    z-index: 0;
    text-decoration: none;
    font-weight: normal;
    flex: 1;
  }

  :global(.nav-item:focus) {
    z-index: 1;
  }
</style>
