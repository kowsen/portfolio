<script>
  import Project from './Project.svelte'

  const projects = window['__projects']
</script>

<div class="projects">
  {#each projects as project}
    <div class="project-container">
      <Project
        name={project.name}
        description={project.description}
        link={project.link}
        img={project.img}
      />
    </div>
  {/each}
</div>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 8px;
  }

  .projects > .project-container::before {
    content: '';
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }

  .project-container {
    display: grid;
  }
</style>
