// closures - a function ran, the function executes. Its never going to
// execute again but its going to remember that there are references to those variables
// so the child scope always has access to the parent scope
const first = () => {
  const greet = "Hi";
  const second = () => {
    const name = "bobby";
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// child scope has access to parent scope
// but parent does not have access to child

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum,sum)(5));
// Avoiding side effects, functional purity










