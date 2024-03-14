interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'omar',
  lastName: 'khaled',
  age: 21,
  location: 'Egypt',
};

const student2: Student = {
  firstName: 'ammar',
  lastName: 'khaled',
  age: 21,
  location: 'Egypt',
};

const studentsList: Array<Student> = [student1, student2];

// table creation
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// columns
const columns = ['firstName', 'location'];
const theadRow = document.createElement('tr');

columns.forEach((column) => {
  const th = document.createElement('th');
  th.textContent = column;
  theadRow.appendChild(th);
});

thead.appendChild(theadRow);
table.appendChild(thead);

// student rows
studentsList.forEach((student) => {
  const tr = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  tr.appendChild(nameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  tr.appendChild(locationCell);

  tbody.appendChild(tr);
});

table.appendChild(tbody);

document.body.appendChild(table);
