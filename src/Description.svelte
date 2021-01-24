<script>
	const NBSP = '\u00A0';
	const TICKS_PER_SPACE = 3;
	const TICKS_PER_CHAR = 5;
	const TICKS_PER_BACKSPACE = 1;
	const PAUSE_TICKS = 50;
	const TICK_LENGTH = 50;

	const descriptions = padToMax([
		'Software Engineer',
		'Game Developer',
		'Person',
		'Very Sleepy'
	]);

	let isFirst = true;
	let descriptionIndex = 0;
	let ticks = 0;
	let maxTicks = -1;

	let description;

	setInterval(() => {
		if (ticks >= maxTicks) {
			ticks = 0;
			descriptionIndex = isFirst ? 0 : Math.floor(Math.random() * descriptions.length);
			maxTicks = getMaxTicks();
			isFirst = false;
		} else {
			ticks += 1;
		}
		const cursor = (ticks % 24) > 12 ? '|' : NBSP;
		description = (descriptions[descriptionIndex].slice(0, getNumCharsToShow()) + cursor).padEnd(descriptions[0].length + 1, NBSP) || '';
	}, TICK_LENGTH);

	// 1 tick per backspace / nbsp space
	// 3 ticks per typed character
	// wait 12 ticks when fully typed

	function getMaxTicks() {
		const current = descriptions[descriptionIndex];
		const spaces = countChar(current, NBSP);
		const chars = current.length - spaces;
		return spaces * TICKS_PER_SPACE + chars * TICKS_PER_CHAR + current.length * TICKS_PER_BACKSPACE + PAUSE_TICKS;
	}

	function getNumCharsToShow() {
		const current = descriptions[descriptionIndex];
		const spaces = countChar(current, NBSP);
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

	function countChar(str, char) {
		return str.split(char).length - 1;
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
</script>

<h2>{description}</h2>

<style>
	h2 {
		margin: 0;
	}
</style>