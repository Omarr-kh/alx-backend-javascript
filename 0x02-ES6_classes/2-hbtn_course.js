export default class HolbertonCourse {
  constructor(name, length, students) {
    // verify the types
    if (
      typeof name !== 'string'
      || typeof length !== 'number'
      || !Array.isArray(students)
    ) {
      throw new Error('Invalid input types');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter and setter for _name
  get name() {
    return this._name;
  }

  set name(newName) {
    // verify type
    if (typeof newName !== 'string') {
      throw new Error('Invalid input type');
    }
    this._name = newName;
  }

  // getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    // verify type
    if (typeof newLength !== 'number') {
      throw new Error('Invalid input type');
    }
    this._length = newLength;
  }

  // getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    // verify type
    if (!Array.isArray(newStudents)) {
      throw new Error('Invalid input type for students');
    }
    this._students = newStudents;
  }
}
