function createFunctions() {
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push(() => i);
  }
  return result;
}

const funcs = createFunctions();
console.log(funcs[0](), funcs[1](), funcs[2]());
