<script>
  import { onDestroy } from 'svelte';
  import { getBag } from './util/bag';

  const NBSP = '\u00A0';
  const TICKS_PER_SPACE = 3;
  const TICKS_PER_CHAR = 5;
  const TICKS_PER_BACKSPACE = 2;
  const PAUSE_TICKS = 250;
  const TICK_LENGTH = 30;
  const UNIQUE_DESCRIPTIONS = 3;
  const BLINK_LEN = 42;
  const BLINK_RATIO = 1 / 2;

  // eslint-disable-next-line no-undef
  const descriptions = __descriptions;
  const displayLen = Math.max(...descriptions.map((str) => str.length));

  const indexBag = getBag(descriptions.length, 0, UNIQUE_DESCRIPTIONS);
  const currentIndex = indexBag.current;
  const nextIndex = indexBag.next;

  let ticks = TICKS_PER_SPACE * (displayLen - descriptions[0].length);

  let current = '';
  let spaces = 0;
  let chars = 0;

  let spaceTicks = 0;
  let charTicks = 0;
  let eraseTicks = 0;

  let next = '';
  let nextSpaces = 0;
  let nextChars = 0;

  let maxTicks = 0;

  $: {
    current = descriptions[$currentIndex].padStart(displayLen, NBSP);
    spaces = countSpaces(current);
    chars = displayLen - spaces;

    spaceTicks = spaces * TICKS_PER_SPACE;
    charTicks = chars * TICKS_PER_CHAR;
    eraseTicks = displayLen * TICKS_PER_BACKSPACE;

    next = descriptions[$nextIndex].padStart(displayLen, NBSP);
    nextSpaces = countSpaces(next);
    nextChars = displayLen - nextSpaces;

    maxTicks =
      spaceTicks +
      charTicks +
      (displayLen - Math.min(spaces, nextSpaces)) * TICKS_PER_BACKSPACE +
      PAUSE_TICKS;
  }

  let cursor = NBSP;
  $: {
    const postTypeTicks = ticks - (spaceTicks + charTicks);
    const isPaused = postTypeTicks > 0 && postTypeTicks < PAUSE_TICKS;
    const isBlinking = postTypeTicks % BLINK_LEN < BLINK_LEN * BLINK_RATIO;

    cursor = isBlinking || !isPaused ? '|' : NBSP;
  }

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
  $: endPadding = ''.padEnd(displayLen - charsToShow, NBSP);

  const textInterval = setInterval(() => {
    if (ticks >= maxTicks) {
      ticks = charsToShow * TICKS_PER_SPACE;
      indexBag.draw();
    } else {
      ticks += 1;
    }
  }, TICK_LENGTH);

  onDestroy(() => {
    clearInterval(textInterval);
  });

  function countSpaces(str) {
    return (str.match(/\u00A0/g) || []).length;
  }
</script>

<h2>{description}{cursor}{endPadding}</h2>

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
