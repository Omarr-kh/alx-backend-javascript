export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = 'N/A';
      const newStu = { ...student };

      newGrades.forEach((newGrade) => {
        if (newGrade.studentId === newStu.id) {
          grade = newGrade.grade;
        }
      });
      newStu.grade = grade;
      return newStu;
    });
}
