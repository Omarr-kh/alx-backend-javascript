export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    // Create a new object to avoid modifying the original parameter
    const updatedStudent = { ...student };

    if (updatedStudent.location === city) {
      const matchingGrade = newGrades.find((newGrade) => newGrade.studentId === updatedStudent.id);

      updatedStudent.grade = matchingGrade ? matchingGrade.grade : 'N/A';
    }

    return updatedStudent;
  });
}
