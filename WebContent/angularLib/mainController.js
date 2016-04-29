'use strict'
//angular.module('app', ['ngRoute']);

var myApp = angular.module("myApp",['ngRoute', 'myControllers']);


myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home',{
            templateUrl : 'view/home/home.html',
            controller : 'homeController'
        }).when('/demystifying',{
            templateUrl : 'view/demystifying/demystifying.html',
            controller: "demystifyingController"
        }).when('/fileupload',{
            templateUrl : 'view/fileupload/fileupload.html',
            controller: "fileuploadController"
        }).when('/imageupload',{
            templateUrl : 'view/imageupload/imageupload.html',
            controller: "imageController"
        }).when('/dashboard',{
            templateUrl : 'view/dashboard/dashboard.html'
        }).otherwise({
            redirectTo: '/dashboard'
        });
}]);

var myappController = angular.module('myControllers', []);
