// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

/*
Here we injected our to modules we use as controllers
When adding a module like loginController.js remember to inject it here!
 */
angular.module('starter', ['ionic', 'starter.loginController', 'starter.todoController'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

/*
This is our config where we define our states, so that vi kan control rendering and navigation
 */
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider


      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html', // found in the templates folder we created in the beginning - login.html
        controller: 'LoginCtrl' // this is found in loginController.js
      })

      /*
      This is our tab state which is our base for a page with a tab navigation.
       abstract true tells this
       */
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html' // same as above - tabs.html
      })

      /*
      as we use 'tab' as abstract you will add our view 'todo' as 'tab.todo'
       */
      .state('tab.todo', {
        url: '/todo',
        views: {
          'todo': {
            templateUrl: 'templates/todo.html', // found in the templates folder we created in the beginning
            controller: 'TodoCtrl' // this is found in todoController.js
          }
        }
      })

      /*
      Same as for todo
       */
      .state('tab.profile', {
        url: '/profile',
        views: {
          'profile': {
            templateUrl: 'templates/profile.html'
          }
        }
      })

    /*
    This is for handling if a you go to a link like "localhost:8000/#/facebook"
    it will not exists and then you will betaken to the defined state
    in this case the login state
     */
    $urlRouterProvider.otherwise('/login')
  })
