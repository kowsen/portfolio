<script>
	import { onDestroy } from 'svelte';
	
	const NBSP = '\u00A0';
	const TICKS_PER_SPACE = 3;
	const TICKS_PER_CHAR = 5;
	const TICKS_PER_BACKSPACE = 2;
	const PAUSE_TICKS = 250;
	const TICK_LENGTH = 30;
	const UNIQUE_REQ = 2;
	const BLINK_LEN = 42;
	const BLINK_RATIO = 1 / 2;

	const descriptions = padToMax(__descriptions);

	let descriptionIndex = 0;
	let nextDescriptionIndex = 0;
	let nextStartTicks = countSpaces(descriptions[0]) * TICKS_PER_SPACE;
	let ticks = 0;
	let maxTicks = -1;
	let lastIndexes = [];

	let description = '';

	const textInterval = setInterval(() => {
		if (ticks >= maxTicks) {
			ticks = nextStartTicks;
			descriptionIndex = nextDescriptionIndex;
			nextDescriptionIndex = getNextMessageIndex();
			maxTicks = getMaxTicks();
			nextStartTicks = getNextStartTicks();
		} else {
			ticks += 1;
		}

		const current = descriptions[descriptionIndex];
		const spaces = countSpaces(current);
		const chars = current.length - spaces;

		const spaceTicks = spaces * TICKS_PER_SPACE;
		const charTicks = chars * TICKS_PER_CHAR;

		const postTypeTicks = ticks - (spaceTicks + charTicks);
		const isPaused = postTypeTicks > 0 && postTypeTicks < PAUSE_TICKS;
		const isBlinking = (postTypeTicks % BLINK_LEN) < (BLINK_LEN * BLINK_RATIO);
		const cursor = (isBlinking || !isPaused) ? '|' : NBSP;
		description = (descriptions[descriptionIndex].slice(0, getNumCharsToShow()) + cursor).padEnd(descriptions[0].length + 1, NBSP) || '';
	}, TICK_LENGTH);

	function getNextMessageIndex() {
		lastIndexes.unshift(descriptionIndex);
		lastIndexes = lastIndexes.slice(0, UNIQUE_REQ);
		if (lastIndexes.length >= descriptions.length) {
			lastIndexes = [];
		}
		let nextIndex = -1;
		while (nextIndex === -1 || lastIndexes.indexOf(nextIndex) !== -1) {
			nextIndex = Math.floor(Math.random() * descriptions.length);
		}
		return nextIndex;
	}

	function getMaxTicks() {
		const current = descriptions[descriptionIndex];
		const spaces = countSpaces(current);
		const chars = current.length - spaces;
		const skippedBackspaces = Math.min(spaces, countSpaces(descriptions[nextDescriptionIndex]));
		return spaces * TICKS_PER_SPACE + chars * TICKS_PER_CHAR + (current.length - skippedBackspaces) * TICKS_PER_BACKSPACE + PAUSE_TICKS;
	}

	function getNextStartTicks() {
		const current = descriptions[descriptionIndex];
		const spaces = countSpaces(current);
		const skippedBackspaces = Math.min(spaces, countSpaces(descriptions[nextDescriptionIndex]));
		return skippedBackspaces * TICKS_PER_SPACE;
	}

	function getNumCharsToShow() {
		const current = descriptions[descriptionIndex];
		const spaces = countSpaces(current);
		const chars = current.length - spaces;

		let toShow = 0;

		const spaceTicks = spaces * TICKS_PER_SPACE;
		const charTicks = chars * TICKS_PER_CHAR;
		const eraseTicks = current.length * TICKS_PER_BACKSPACE;

		if (ticks < spaceTicks) {
			return Math.floor(ticks / TICKS_PER_SPACE);
		} else if (ticks < spaceTicks + charTicks) {
			return spaces + Math.floor((ticks - spaceTicks) / TICKS_PER_CHAR);
		} else if (ticks < spaceTicks + charTicks + PAUSE_TICKS) {
			return current.length;
		} else if (ticks < spaceTicks + charTicks + PAUSE_TICKS + eraseTicks) {
			const backspaceTicks = ticks - spaceTicks - charTicks - PAUSE_TICKS;
			const charsToBackspace = Math.floor(backspaceTicks / TICKS_PER_BACKSPACE);
			return current.length - charsToBackspace;
		} else {
			return 0;
		}
	}

	function countSpaces(str) {
		return (str.match(/\u00A0/g) || []).length;
	}

	function padToMax(strs) {
		let maxLen = 0;
		for (const str of strs) {
			maxLen = Math.max(str.length, maxLen);
		}
		return strs.map(str => padStr(str, maxLen));
	}

	function padStr(str, len) {
		return str.padStart(len, NBSP);
	}

	onDestroy(() => {
        clearInterval(textInterval);
    });
</script>

<h2>{description}</h2>

<style>
	h2 {
		margin: 0 0 0 auto;
		white-space: nowrap;
		user-select: none;
	}

	@media only screen and (max-width: 600px) {
		h2 {
			font-size: 1em;
		}
	}
</style>