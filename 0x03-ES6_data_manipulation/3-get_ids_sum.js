export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  return students.reduce((acc, currStudent) => acc + currStudent.id, 0);
}
