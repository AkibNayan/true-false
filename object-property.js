const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 30, name: 'Manna' },
    { id: 41, name: 'Mayouri' },
    { id: 71, name: 'DeepJol' }
];
const names = students.map(element => element.name);
const ids = students.map(element => element.id);
const bigger = students.filter(element => element.id > 40);
const even = students.filter(element => element.id % 2 == 0);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(even);