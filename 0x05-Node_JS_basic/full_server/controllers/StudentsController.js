import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((studentFields) => {
        let output = 'This is the list of our students';

        const fields = Object.keys(studentFields).sort();
        fields.forEach((field) => {
          const studentsCount = studentFields[field].length;
          const firstNames = studentFields[field].join(', ');

          output += `\nNumber of students in ${field}: ${studentsCount}. List: ${firstNames}`;
        });

        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((studentFields) => {
        response.status(200).send(`List: ${studentFields[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
