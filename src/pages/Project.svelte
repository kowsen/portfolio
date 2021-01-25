<script>
	export let name;
	export let description;
	export let link;
	export let img;

	$: imgStyle = `background-image: url("${img}")`;
</script>

<a href={link}>
	<div class="project-contents">
		<div class="project-background" style={imgStyle}></div>
		<div class="project-text">
			<h3>{name}</h3>
			<span>{description}</span>
		</div>
	</div>
</a>

<style>
	a {
		grid-area: 1 / 1 / 2 / 2;
	}

	.project-contents {
		position: relative;
		min-width: 200px;
		min-height: 200px;
		width: 100%;
		height: 100%;
		text-align: center;
	}

	.project-background {
		position: absolute;
		width: 100%;
		height: 100%;
		background-size: cover;
		filter: opacity(10%);
	}

	.project-text {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;
		filter: opacity(100%);
	}

	a:hover .project-background,
	a:focus .project-background {
		filter: opacity(100%);
	}

	a:hover .project-text,
	a:focus .project-text {
		filter: opacity(0%);
	}

	@media (hover: hover) {
		.project-background {
	    	filter: opacity(100%);
	    }

	    .project-text {
	    	filter: opacity(0%);
	    }

		a:hover .project-background,
		a:focus .project-background {
			filter: opacity(10%);
		}

		a:hover .project-text,
		a:focus .project-text {
			filter: opacity(100%);
		}
	}

	.project-text, .project-background {
		transition: filter 0.3s ease;
	}

	a {
		text-decoration: none;
		/*font-weight: normal;*/
	}

	.project-contents h3 {
		font-size: 1.25em;
		font-weight: bolder;
	}

	.project-contents span {
		font-size: 1em;
		padding: 8px;
		min-height: 60px;
		font-weight: bold;
	}
</style>