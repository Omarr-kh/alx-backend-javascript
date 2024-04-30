const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
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

      resolve(studentsData);
    }
  });
});

export default readDatabase;
module.exports = readDatabase;
