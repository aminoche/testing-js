const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

let result = sum(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  return `Pass`;
}

result = subtract(7, 3);
expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  return `Pass`; //cannot be reached since there is an error thrown on line 8
}
