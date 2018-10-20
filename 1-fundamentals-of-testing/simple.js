const { sum, subtract } = require('./math');
let result = sum(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  return `Pass`;
}

//code below cannot be reached since there is an error thrown in the first test

result = subtract(7, 3);
expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  return `Pass`;
}
