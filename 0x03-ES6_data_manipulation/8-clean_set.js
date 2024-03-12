export default function cleanSet(set, startString) {
  const cleanedStr = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const str = value.substring(startString.length);

      if (str && str !== value) {
        cleanedStr.push(str);
      }
    }
  }
  return cleanedStr.join('-');
}
