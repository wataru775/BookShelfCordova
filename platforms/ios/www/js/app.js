// Ionic Starter App
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('view', {
      url: '/view',
      templateUrl: 'templates/view.html'
    })

  $urlRouterProvider.otherwise('/view');

});
