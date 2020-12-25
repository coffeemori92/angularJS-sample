angular.module('todo').directive('todoTitle', () => {
  return {
    template: '<h1>Todo</h1>'
  }
});
angular.module('todo').directive('todoItem', () => {
  return {
    //templateUrl: './todoItem.tpl.html'
    template: `
      <div>
        <h3>{{ todo.title }}</h3>
        <input type="text" ng-model="todo.title">
        <input type="checkbox" ng-model="todo.completed">
        <p>{{ todo.createdAt | date: 'yyyy-MM-dd hh:mm:ss'}}</p>
      </div>
      <button ng-click="remove(todo)">삭제</button>
    `
  }
});
angular.module('todo').directive('todoFilter', () => {
  return {
    template: `
      <button ng-click="statusFilter={ completed: true }">Completed</button>
      <button ng-click="statusFilter={ completed: false }">Active</button>
      <button ng-click="statusFilter={}">All</button>
    `
  };
});
angular.module('todo').directive('todoForm', () => {
  return {
    template: `
      <form name="todoForm" ng-submit="add(newTodoTitle)">
        <input 
          type="text" 
          ng-model="newTodoTitle" 
          placeholder="새로운 todo 추가" 
          autofocus 
          minlength="3">
        <div ng-show="todoForm.$invalid">
          <p>3글자 이상 입력하세요</p>
        </div>
        <button>추가</button>
      </form>
    `
  };
});