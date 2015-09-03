/**
 * Created by nielshansen on 03/09/15.
 */

/*
The same as explained in loginController
 */
angular.module('starter.todoController', [])
  /*
   The same as explained in loginController
   */
.controller('TodoCtrl', function ($scope) {

    /*
    here we used the $scope to create an array with objects
    We got 3 objects which we use in the todo.html
     */
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

    /*
    The function to remove an object from the array, when you swipe and click the "Done" button.
    And our function takes and argument which is passed from the "Done" button.
     */
    $scope.deleteTodo = function (todo) {
      /*
      this is uses splice(a,b) it takes two arguments fx a and b
       The first argument is the index of the todos with we get from our passed value.
       the second argument tells that it is only this one we want to delete.
       */
      $scope.todos.splice($scope.todos.indexOf(todo) ,1)
    }
  })
