// Destructuring
const obj = {
  player: "Bobby",
  experience: 100,
  wizardLevel: false,
};

const { player, experience, wizardLevel } = obj;

const name = "john snow";

const obj2 = {
  [name]: "hello",
  [1 + 2]: "hihi",
};

const a = "Mike";
const b = true;
const c = 1;

const obj3 = {
  a,
  b,
  c,
};

// Symbol
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
