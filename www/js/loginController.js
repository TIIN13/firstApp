/**
 * Created by nielshansen on 03/09/15.
 */
angular.module('starter.loginController', [])

.controller('LoginCtrl', function($scope, $state) {

    $scope.login = function () {
      $state.go('tab.todo')
    }

})
