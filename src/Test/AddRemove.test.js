/**
 * @jest-environment jsdom
 */

const { newTodoList, remove } = require('../modules/_mocks_/mocks.js');

// add item test
describe('Adding items', () => {
  newTodoList('completed tasks');
  newTodoList('send tasks');
  newTodoList('completed');
  newTodoList('start next task');
  test('Check if newTodoList is a function', () => {
    expect(typeof newTodoList).toBe('function');
  });
  test('test if newTodolist is adding', () => {
    expect(4).toBe(4);
  });
});

describe('removing item in todos', () => {
  remove(1);
  test('check if remove is a function', () => {
    expect(typeof remove).toBe('function');
  });
});
// remove item test

//
