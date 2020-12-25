angular.module('todo').factory('todoStorage', () => {
  const TODO_DATA = 'TODO_DATA';
  const storage = {
    todos = [{
      title: '요가수련',
      completed: false,
      createdAt: Date.now(),
    }, {
      title: '앵귤러 학습',
      completed: false,
      createdAt: Date.now(),
    }, {
      title: '운동하기',
      completed: true,
      createdAt: Date.now(),
    }],
    get() {
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },
    remove(todo) {
      const idx = storage.todos.findIndex(item => {
        console.log(todo);
        return item.$$hashKey === todo.$$hashKey;
      });
      if(idx > -1) {
        storage.todos.splice(idx, 1);
        storage._saveToLocalStorage(storage.todos);
      }
    },
    add(newTodoTitle) {
      const newTodo = {
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now(),
      };
      storage.todos.push(newTodo);
      storage._saveToLocalStorage(storage.todos);
    },
    update() {
      storage._saveToLocalStorage(storage.todos);
    },
    _saveToLocalStorage(data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },
    _getFromLocalStorage() {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    }
  };
  return storage;
});