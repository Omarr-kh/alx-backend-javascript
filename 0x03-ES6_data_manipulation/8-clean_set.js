export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const arr = [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length));
  return arr.join('-');
}
