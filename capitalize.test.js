const { test } = require('node:test');
const assert = require('node:assert/strict');
const { capitalize } = require('./capitalize');

test('capitalize normal word', () => {
  assert.equal(capitalize('hello'), 'Hello');
});

test('capitalize already-capitalized word', () => {
  assert.equal(capitalize('Hello'), 'Hello');
});

test('capitalize single character', () => {
  assert.equal(capitalize('a'), 'A');
});

test('capitalize empty string returns empty', () => {
  assert.equal(capitalize(''), '');
});

test('capitalize with no argument returns empty', () => {
  assert.equal(capitalize(), '');
});

test('capitalize blank string returns empty', () => {
  assert.equal(capitalize('   '), '');
});
