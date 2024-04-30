const fs = require('fs');

/* Read Database CSV file sync
 *
 * Count the number of students
 * Count the number of students in each field and print their names
 */
const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const dataLines = data
      .split('\n')
      .filter((line) => line !== '')
      .slice(1);
    const columnValues = dataLines.map((line) => line.split(','));

    console.log(`Number of students: ${columnValues.length}`);

    const studentsData = {};

    columnValues.forEach((column) => {
      const firstName = column[0];
      const field = column[3];

      if (!studentsData[field]) {
        studentsData[field] = [firstName];
      } else {
        studentsData[field].push(firstName);
      }
    });

    for (const field in studentsData) {
      if (Object.hasOwnProperty.call(studentsData, field)) {
        const students = studentsData[field].join(', ');
        const fieldCount = studentsData[field].length;
        console.log(`Number of students in ${field}: ${fieldCount}. List: ${students}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
