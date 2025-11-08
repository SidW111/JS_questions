const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Expected output: { apple: 3, banana: 2, orange: 1 }

const fru = fruits.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
  return acc;
}, {});

console.log(fru);

const employees = [
  { dept: "HR", salary: 3000 },
  { dept: "IT", salary: 5000 },
  { dept: "HR", salary: 4000 },
  { dept: "Sales", salary: 2000 },
];
// Expected: { HR: 7000, IT: 5000, Sales: 2000 }

const salary = employees.reduce((acc, curr) => {
  acc[curr.dept] = acc[curr.dept] ? acc[curr.dept] + curr.salary : curr.salary;
  return acc;
}, {});

console.log(salary);

const people = [
  { name: "A", gender: "male" },
  { name: "B", gender: "female" },
  { name: "C", gender: "male" },
  { name: "D", gender: "female" },
];

const gen = people.reduce((acc, curr) => {
  acc[curr.gender] = acc[curr.gender] ? acc[curr.gender] + 1 : 1;
  return acc;
}, {});

console.log(gen);

const nums = [1, 2, 3, 4, 5, 6];
// Expected: { even: 3, odd: 3 }

const evOd = nums.reduce((acc, curr) => {
  curr % 2 === 0
    ? (acc.even = (acc.even || 0) + 1)
    : (acc.odd = (acc.odd || 0) + 1);
  return acc;
}, {});

console.log(evOd);

const peoples = [
  { name: "A", month: "Jan" },
  { name: "B", month: "Feb" },
  { name: "C", month: "Jan" },
];
// Expected: { Jan: 2, Feb: 1 }

const mon = peoples.reduce((acc, curr) => {
  acc[curr.month] = acc[curr.month] ? acc[curr.month] + 1 : 1;
  return acc;
}, {});

console.log(mon)