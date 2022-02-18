// closures
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
curriedMultiply(3)(4);

// Compose
const compose = (f, g) => (a) => f(g(a));

// Avoiding side effects, functional purity
