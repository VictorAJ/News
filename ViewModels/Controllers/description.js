'use strict';

app.controller('DescCtrl',['$scope', '$rootScope','NewsService', function($scope, $rootScope, NewsService) {

    var newsContent = JSON.parse(localStorage.getItem('news'));

    $scope.news = newsContent; 
}]);