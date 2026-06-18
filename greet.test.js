const { test } = require('node:test');
const assert = require('node:assert/strict');
const { greet } = require('./greet');

test('greet with name', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('greet with no name defaults to World', () => {
  assert.equal(greet(), 'Hello, World!');
});
