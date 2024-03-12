export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') return '';

  return [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .filter((item) => item !== '')
    .join('-');
}
