const fs = require('fs');

/* Read Database CSV file async
 *
 * Count the number of students
 * Count the number of students in each field and print their names
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
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
      resolve();
    }
  });
});

module.exports = countStudents;
