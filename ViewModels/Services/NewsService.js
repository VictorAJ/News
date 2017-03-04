app.service('NewsService', ['$rootScope','$http','$q', function ($rootScope, $http, $q) {

    this.getNewsHeadLines = function(title) {
        var url = "https://newsapi.org/v1/articles?source=bbc-news&apiKey=e09d162140c64b6f924cdbac1305296c"

        var d = $q.defer();

        $http.get(url).success(function (data) {
            d.resolve(data);
        }).error(function() {
            d.reject();
        });

        return d.promise;
    }
}]);