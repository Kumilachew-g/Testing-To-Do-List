import { addItem, clear, update, clearAll } from './activities.js';
import ToDo from '../src/modules/constructor.js';

const activities = require('./activities.js');

describe('Tests for todo list app', () => {
  test('should add item to the list', () => {
    addItem('some text');
    addItem('some other text');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(2);
  });

  test('Should remove an item from the list', () => {
    clear(0);
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage).toHaveLength(1);
  });

  test('Update complete status', () => {
    const newItem = new ToDo('some text');
    expect(newItem.complete).toBeFalsy();
    newItem.update();
    expect(newItem.complete).toBeTruthy();
  });

  test('Edit item', () => {
    update(0, 'edited text');
    const storage = JSON.parse(localStorage.getItem('todoList'));
    expect(storage[0].description).toBe('edited text');
  });

  test('Clear all completed', () => {
    clearAll(ToDo);
    ToDo.list.forEach((item) => {
      expect(item.complete).toBeFalsy();
    });
  });
});
