import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet } from '../src/greet.js';

test('valid input with default greeting', () => {
  assert.equal(greet({ name: 'World' }), 'Hello, World!');
});

test('valid input with custom greeting', () => {
  assert.equal(greet({ name: 'Alice', greeting: 'Hi' }), 'Hi, Alice!');
});

test('throws when name is missing', () => {
  assert.throws(() => greet({}), /Invalid input/);
});

test('throws when name is empty string', () => {
  assert.throws(() => greet({ name: '' }), /Invalid input/);
});

test('throws when name is wrong type', () => {
  assert.throws(() => greet({ name: 42 }), /Invalid input/);
});

test('throws on additional properties', () => {
  assert.throws(() => greet({ name: 'X', extra: 1 }), /Invalid input/);
});

test('throws when greeting is wrong type', () => {
  assert.throws(() => greet({ name: 'X', greeting: 99 }), /Invalid input/);
});
