export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string'
      || !(set instanceof Set)) {
    return '';
  }

  const arr = [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .filter((item) => item !== '');

  return arr.join('-');
}
