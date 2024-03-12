export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use map to create a new array with modified students
  return students.map((student) => {
    // Check if the student is in the specified city
    if (student.location === city) {
      // Find the matching grade for the current student
      const matchingGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);

      // Update the grade based on the matching grade or set it to 'N/A'
      student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
    }

    // Return the modified or unmodified student
    return student;
  });
}
