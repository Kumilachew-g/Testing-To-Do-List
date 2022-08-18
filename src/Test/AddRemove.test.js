/**
 * @jest-environment jsdom
 */

const { newTodoList, remove } = require('../modules/_mocks_/mocks.js');

let ItemList;
// add item test
describe('Adding items', () => {
  newTodoList('completed tasks');
  newTodoList('send tasks');
  newTodoList('completed');
  newTodoList('start next task');
  test('Check if newTodoList is a function', () => {
    expect(typeof newTodoList).toBe('function');
  });
});

// remove item test

//
