const { test } = require('node:test');
const assert = require('node:assert/strict');
const { clamp } = require('./clamp');

test('clamp value within range', () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test('clamp value below min returns min', () => {
  assert.equal(clamp(-5, 0, 10), 0);
});

test('clamp value above max returns max', () => {
  assert.equal(clamp(15, 0, 10), 10);
});

test('clamp value at lower boundary', () => {
  assert.equal(clamp(0, 0, 10), 0);
});

test('clamp value at upper boundary', () => {
  assert.equal(clamp(10, 0, 10), 10);
});
