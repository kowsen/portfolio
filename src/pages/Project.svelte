<script>
	export let name;
	export let description;
	export let link;
	export let img;

	let linkElem;

	$: imgStyle = `background-image: url("${img}")`;

	function onTap(event) {
		if (linkElem && document.activeElement !== linkElem) {
			linkElem.focus();
			event.stopPropagation();
			event.preventDefault();
		}
	}
</script>

<a href={link} bind:this={linkElem} on:touchend={onTap}>
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
		text-decoration: none;
		user-select: none;
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
		filter: opacity(100%);
	}

	.project-text {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;
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

	.project-text, .project-background {
		transition: filter 0.3s ease;
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