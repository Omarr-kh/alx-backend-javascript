export default function iterateThroughObject(reportWithIterator) {
  let names = '';

  for (const emp of reportWithIterator) {
    names += emp;

    if (emp !== reportWithIterator[reportWithIterator.length - 1]) {
      names += ' | ';
    }
  }

  return names;
}
