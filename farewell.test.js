const { test } = require('node:test');
const assert = require('node:assert/strict');
const { farewell } = require('./farewell');

test('farewell with name', () => {
  assert.equal(farewell('Ada'), 'Goodbye, Ada!');
});

test('farewell with no name defaults to World', () => {
  assert.equal(farewell(), 'Goodbye, World!');
});

test('farewell with blank name defaults to World', () => {
  assert.equal(farewell('   '), 'Goodbye, World!');
});
