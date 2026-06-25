const { test } = require('node:test');
const assert = require('node:assert/strict');
const { factorial } = require('./factorial');

test('factorial(0) returns 1', () => {
  assert.equal(factorial(0), 1);
});

test('factorial(1) returns 1', () => {
  assert.equal(factorial(1), 1);
});

test('factorial(5) returns 120', () => {
  assert.equal(factorial(5), 120);
});

test('factorial of negative returns NaN', () => {
  assert.ok(Number.isNaN(factorial(-1)));
});

test('factorial of non-integer returns NaN', () => {
  assert.ok(Number.isNaN(factorial(2.5)));
});
