export default class ToDoList {
  static list = [];

  constructor(description, complete = false) {
    this.description = description;
    this.complete = complete;
    this.index = ToDoList.list.length;
    ToDoList.list.push(this);
    this.getList = () => ToDoList.list;
  }
}
