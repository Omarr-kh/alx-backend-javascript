export default function updateStudentGradeByCity(students, city, newGrades) {
  let filtered = students.filter((student) => student.location === city);
  return filtered.map((student) => {
    newGrades.forEach((newGrade) => {
      if (newGrade.studentId === student.id) {
        student.grade = newGrade.grade;
      } else {
        student.grade = 'N/A';
      }
    });
    return student;
  });
}
