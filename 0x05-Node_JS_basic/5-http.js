const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    writeStudentsList(process.argv[2])
      .then((output) => res.end(`This is the list of our students\n${output}`))
      .catch((err) => res.end(`This is the list of our students\n${err.message}`));
  }
});

const PORT = 1245;
app.listen(PORT);

module.exports = app;
