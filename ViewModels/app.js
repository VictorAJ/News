'use strict'

var app = angular.module('NewsApp', ['ngMaterial','ngRoute'])

app.config(function($routeProvider, $mdIconProvider) {

    $mdIconProvider
      .iconSet('call', 'img/icons/sets/communication-icons.svg', 24);

    $routeProvider
    .when("/home", {
        templateUrl: "Templates/home.html"
    })
    .when("/description", {
        templateUrl: "Templates/description.html"
    })

    .otherwise({
        templateUrl: "Templates/home.html"
    });;
})
