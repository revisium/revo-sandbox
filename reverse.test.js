const { test } = require('node:test');
const assert = require('node:assert/strict');
const { reverse } = require('./reverse');

test('reverse normal word', () => {
  assert.equal(reverse('hello'), 'olleh');
});

test('reverse palindrome', () => {
  assert.equal(reverse('aba'), 'aba');
});

test('reverse single character', () => {
  assert.equal(reverse('a'), 'a');
});

test('reverse empty string returns empty', () => {
  assert.equal(reverse(''), '');
});

test('reverse with no argument returns empty', () => {
  assert.equal(reverse(), '');
});
