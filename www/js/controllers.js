var currentBooks = [];
var page = 1;
var page_rows = 9;
var max_page = 1;

angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $http) {
    $scope.show_books=[];

    var $url = "http://www.mmpp.org/service/bookdb/select_book.json";
      $http({
          method : 'GET',
          url : $url
      }).success(function(data, status, headers, config) {
          currentBooks = data.RESULT;
          page = 1;

          max_page = Math.ceil( currentBooks.length / page_rows );
          $scope.show_books = currentBooks.slice(0,page_rows);
      }).error(function(data, status, headers, config) {
          console.log(status);
      });

    $scope.onSwipeLeft = function() {
        page ++ ;
        if(page > max_page){
            page = max_page;
        }
        $scope.doRefresh();

    }
    $scope.onSwipeRight = function() {
        page -- ;
        if(page<1){
            page = 1;
        }
        $scope.doRefresh();

    }
    $scope.doRefresh = function() {
        var start = (page - 1) * page_rows;
        var end = start + page_rows;
        if(end > currentBooks.length){
            end = currentBooks.length;
        }
        console.log("show : " + page + " ( "+ start + " , " + end + " ) ");
        $scope.show_books = currentBooks.slice(start,end);
    }
})
;
