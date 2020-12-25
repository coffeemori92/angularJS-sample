angular.module('todo').controller('TodoController', ['$scope', ($scope) => {
  $scope.todos = [{
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
  }]
  $scope.remove = todo => {
    const idx = $scope.todos.findIndex(item => {
      console.log(todo);
      return item.$$hashKey === todo.$$hashKey;
    });
    if(idx > -1) {
    $scope.todos.splice(idx, 1);
  }
  };
  $scope.add = newTodoTitle => {
    const newTodo = {
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now(),
    };
    $scope.todos.push(newTodo);
    $scope.newTodoTitle = '';
  }
}]);