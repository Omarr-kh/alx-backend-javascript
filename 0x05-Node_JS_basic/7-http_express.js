const express = require('express');
const fs = require('fs');

const app = express();

const writeStudentsList = (path) => new Promise((resolve, reject) => {
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

      let output = `Number of students: ${columnValues.length}`;

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
          output += `\nNumber of students in ${field}: ${fieldCount}. List: ${students}`;
        }
      }
      resolve(output);
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  writeStudentsList(process.argv[2])
    .then((output) => res.send(`This is the list of our students\n${output}`))
    .catch((err) => res.send(`This is the list of our students\n${err.message}`));
});

app.listen(1245);

module.exports = app;
