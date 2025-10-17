const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 5;
console.log(obj1.b.c);

// Spread makes a shallow copy → nested object b is shared.
// So changing obj2.b.c also changes
