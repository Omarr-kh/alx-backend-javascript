const fs = require('fs');

/* Read Database CSV file sync
 *
 * Count the number of students
 * Count the number of students in each field and print their names
 */
const countStudents = (path) => {
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  dataLines = data
    .split('\n')
    .filter((line) => line !== '')
    .slice(1);
  const columnValues = dataLines.map((line) => line.split(','));

  console.log(`Number of students: ${columnValues.length}`);

  const studentsData = {};

  columnValues.forEach((column) => {
    firstName = column[0];
    field = column[3];

    if (!studentsData[field]) {
      studentsData[field] = [firstName];
    } else {
      studentsData[field].push(firstName);
    }
  });

  for (const field in studentsData) {
    students = studentsData[field].join(', ');
    fieldCount = studentsData[field].length;
    console.log(
      `Number of students in ${field}: ${fieldCount}. List: ${students}`
    );
  }
};

module.exports = countStudents;
