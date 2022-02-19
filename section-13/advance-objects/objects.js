// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
// context vs scope
const object4 = {
  a() {
    console.log(this);
  },
};
// instintiation
