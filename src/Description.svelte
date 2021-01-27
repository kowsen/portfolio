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

  // eslint-disable-next-line no-undef
  const descriptions = __descriptions;

  let descriptionIndex = 0;

  let ticks = 0;
  let lastIndexes = [0];

  let nextDescriptionIndex = getNextMessageIndex();

  $: displayLen = Math.max(...descriptions.map((str) => str.length));

  $: current = descriptions[descriptionIndex].padStart(displayLen, NBSP);
  $: spaces = countSpaces(current);
  $: chars = displayLen - spaces;

  $: spaceTicks = spaces * TICKS_PER_SPACE;
  $: charTicks = chars * TICKS_PER_CHAR;
  $: eraseTicks = displayLen * TICKS_PER_BACKSPACE;

  $: next = descriptions[nextDescriptionIndex].padStart(displayLen, NBSP);
  $: nextSpaces = countSpaces(next);
  $: nextChars = displayLen - nextSpaces;

  $: maxTicks =
    spaceTicks +
    charTicks +
    (displayLen - Math.min(spaces, nextSpaces)) * TICKS_PER_BACKSPACE +
    PAUSE_TICKS;

  $: postTypeTicks = ticks - (spaceTicks + charTicks);
  $: isPaused = postTypeTicks > 0 && postTypeTicks < PAUSE_TICKS;
  $: isBlinking = postTypeTicks % BLINK_LEN < BLINK_LEN * BLINK_RATIO;

  $: cursor = isBlinking || !isPaused ? '|' : NBSP;

  let charsToShow = 0;
  $: {
    if (ticks < spaceTicks) {
      // Typing spaces
      charsToShow = Math.floor(ticks / TICKS_PER_SPACE);
    } else if (ticks < spaceTicks + charTicks) {
      // Typing message
      charsToShow = spaces + Math.floor((ticks - spaceTicks) / TICKS_PER_CHAR);
    } else if (ticks < spaceTicks + charTicks + PAUSE_TICKS) {
      // Pausing
      charsToShow = current.length;
    } else if (ticks < spaceTicks + charTicks + PAUSE_TICKS + eraseTicks) {
      // Erasing message
      const backspaceTicks = ticks - spaceTicks - charTicks - PAUSE_TICKS;
      const charsToBackspace = Math.floor(backspaceTicks / TICKS_PER_BACKSPACE);
      charsToShow = current.length - charsToBackspace;
    } else {
      // At / after the end of the cycle
      charsToShow = 0;
    }
  }

  $: description = current.slice(0, charsToShow);

  $: toPrint = `${description}${cursor}`.padEnd(displayLen + 1, NBSP);

  const textInterval = setInterval(() => {
    if (ticks >= maxTicks) {
      ticks = charsToShow * TICKS_PER_SPACE;
      markIndexUsed(descriptionIndex);
      descriptionIndex = nextDescriptionIndex;
      nextDescriptionIndex = getNextMessageIndex();
    } else {
      ticks += 1;
    }
  }, TICK_LENGTH);

  onDestroy(() => {
    clearInterval(textInterval);
  });

  function markIndexUsed(index) {
    lastIndexes.unshift(index);
    lastIndexes = lastIndexes.slice(0, UNIQUE_REQ);
  }

  function getNextMessageIndex() {
    const validIndexes = descriptions
      .map((_, i) => i)
      .filter((i) => !lastIndexes.includes(i));
    return validIndexes[Math.floor(Math.random() * validIndexes.length)];
  }

  function countSpaces(str) {
    return (str.match(/\u00A0/g) || []).length;
  }
</script>

<h2>{toPrint}</h2>

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
