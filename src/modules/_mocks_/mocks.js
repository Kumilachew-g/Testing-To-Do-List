const { update } = require('lodash');

/**
 * @jest-environment jsdom
 */
document.body.innerHTML = `
 <li class="row">
         <ul class="todo-list">
         </ul>
 </li> `;

let ItemList;
let clear;

const newTodoList = (e) => {
  const newDoing = e;
  const tobeDone = JSON.parse(localStorage.getItem('todos') || '[]');

  const newTodoList = {
    description: newDoing,
    completedTask: false,
    id: tobeDone[tobeDone.length - 1]
      ? tobeDone[tobeDone.length - 1].id + 1
      : tobeDone.length + 1,
  };
  const update = [...tobeDone, newTodoList];
  localStorage.setItem('todos', JSON.stringify(update));
  ItemList = update.length;
  return update;
};

const remove = (targetIndex) => {
  const todoListArray = JSON.parse(localStorage.getItem('todos') || '[]');
  const updateList = todoListArray.filter(
    (todos) => todos.id !== parseInt(targetIndex, 10),
  );
  return updateList;
};

const edit = (targetIndex, newDescription) => {
  const todoListArray = JSON.parse(localStorage.getItem('todos') || '[]');
  const updateList = todoListArray.map((todos) => {
    if (todos.id === parseInt(targetIndex, 10)) {
      return {
        ...todos,
        description: newDescription,
      };
    }
    return todos;
  }).filter((todos) => todos.id !== parseInt(targetIndex, 10));
  return updateList;
};

const clearAll = () => {
  const todoListArray = JSON.parse(localStorage.getItem('todos') || '[]');
  const updateList = todoListArray.filter((todos) => todos.completedTask === false);
  return updateList;
};

module.exports = {
  newTodoList,
  remove,
  edit,
  clearAll,
};
