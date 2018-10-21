const { sum, subtract } = require('./math');
const RED = '\x1b[32m';
const GREEN = '\x1b[31m';
test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(RED, `✔ ${title}`);
  } catch (error) {
    console.error(GREEN, `✘ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual < expected) {
        throw new Error(`${actual} is not greater than ${expected}`);
      }
    },
    toBeLessThan(expected) {
      if (actual > expected) {
        throw new Error(`${actual} is not less than ${expected}`);
      }
    }
  };
}
