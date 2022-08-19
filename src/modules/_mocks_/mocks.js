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
<<<<<<< HEAD
  })
=======
  });
>>>>>>> a2270ca10827f4d1f94dce397881fe5bc4b0745f
  return updateList;
};

const checkComplete = (id) => {
  const todoListArray = JSON.parse(localStorage.getItem('todos') || '[]');
  const updateTodoList = todoListArray.map((todos) => {
    if (todos.id === parseInt(id, 10)) {
      return { ...todos, completedTask: !todos.completedTask };
    }
    return todos;
  });
  localStorage.setItem('todos', JSON.stringify(updateTodoList));
  return updateTodoList;
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
  checkComplete,
  clearAll,
};
