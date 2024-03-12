export default function getListStudentIds(arrObjects) {
  if (!Array.isArray(arrObjects)) {
    return [];
  }

  return arrObjects.map((obj) => obj.id);
}
