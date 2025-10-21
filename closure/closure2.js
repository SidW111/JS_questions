function outer() {
  let name = "Sid";
  return function inner() {
    console.log(name);
  };
}

const sayName = outer();
name = "Savior";
sayName();

//Sid