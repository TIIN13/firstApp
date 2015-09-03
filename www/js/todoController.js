/**
 * Created by nielshansen on 03/09/15.
 */
angular.module('starter.todoController', [])

.controller('TodoCtrl', function ($scope) {

    $scope.todos = [
      {
        title: "first"
      },
      {
        title: "second"
      },
      {
        title: "third"
      }
    ]

    $scope.deleteTodo = function (todo) {
      $scope.todos.splice($scope.todos.indexOf(todo) ,1)
    }
  })
