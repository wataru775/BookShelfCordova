angular.module('starter.controllers', [])

.controller('onLoadChats', function($scope, $http) {
  var $url = "http://www.mmpp.org/service/bookdb/select_book.json";
      $http({
          method : 'GET',
          url : $url
      }).success(function(data, status, headers, config) {
          Books = data.RESULT;
          $scope.books = Books;
      }).error(function(data, status, headers, config) {
          console.log(status);
      });
});
