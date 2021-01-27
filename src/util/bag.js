import { get, writable } from 'svelte/store';

export function getBag(count, start, toKeepOut = 0) {
  const seed = [...Array(count).keys()];
  const outOfBag = [];

  const current = writable(-1);
  const next = writable(start);

  const draw = () => {
    const nextVal = get(next);
    current.set(nextVal);
    outOfBag.push(nextVal);
    while (outOfBag.length > toKeepOut && outOfBag.length > 0) {
      outOfBag.shift();
    }
    const index = Math.floor(Math.random() * (count - outOfBag.length));
    next.set(seed.filter((val) => !outOfBag.includes(val))[index]);
  };

  draw();

  return { current, next, draw };
}
