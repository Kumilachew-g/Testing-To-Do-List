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
    expect(newTodoList).toBe(newTodoList);
  });
  test('test if newTodolist is adding', () => {
    expect(newTodoList()).toEqual([{ completedTask: false, description: 'completed tasks', id: 1 }, { completedTask: false, description: 'send tasks', id: 2 }, { completedTask: false, description: 'completed', id: 3 }, { completedTask: false, description: 'start next task', id: 4 }, { completedTask: false, description: undefined, id: 5 }]);
  });
});

describe('Removing items in todos', () => {
  test('check if remove is a function', () => {
    expect(typeof remove).toBe('function');
  });
  test('Testing if todos are removed from array', () => {
    expect(remove(1)).toEqual([{ completedTask: false, description: 'send tasks', id: 2 }, { completedTask: false, description: 'completed', id: 3 }, { completedTask: false, description: 'start next task', id: 4 }, { completedTask: false, id: 5 }]);
  });
});
