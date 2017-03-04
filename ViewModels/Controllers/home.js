'use strict';

app.controller('HomeCtrl',['$scope', '$rootScope','NewsService', '$location','$mdDialog', function($scope, $rootScope, NewsService, $location, $mdDialog) {
    $scope.headLines = [];
     $scope.myInterval = 3000;

    angular.element(document).ready(function () {
         $scope.getHeadLines();
    });

    $scope.getHeadLines = function() {
        NewsService.getNewsHeadLines().then(( response )=>{
            if( response.status.toString().toUpperCase() == 'OK' ) {
                $scope.newsSource  = response.source;
                if(response.articles.length > 0) {
                    var headLinesObj = [];

                    for(var i in response.articles) {
                        headLinesObj.push(response.articles[i])
                    }

                    $scope.headLines = headLinesObj; 
                }
            }
            console.log(response);   
        })
    }


    $scope.openDialog = function($event) {
      $mdDialog.show({
        controller: DialogCtrl,
        controllerAs: 'ctrl',
        templateUrl: 'dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true
      })
    }

    
    
    $scope.showDescription = function(content) {
        localStorage.setItem('news',JSON.stringify(content));
        $location.path('/description');
    }
}])

app.controller('SampleCtrl',['$scope', '$rootScope','NewsService', function($scope, $rootScope, NewsService) {
    
}]);


