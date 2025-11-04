var createCounter = function (init) {
  let current = init;

  return {
    increment: function () {
      return ++current;
    },
    decrement: function () {
      return --current;
    },
    reset: function () {
      current = init;
      return current;
    },
  };
};

counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
