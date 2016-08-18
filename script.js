	var routeApp = angular.module('routeApp', ['ngRoute']);
	routeApp.config(function ($routeProvider) {
	    $routeProvider.when('/', {
	        templateUrl: 'pages/page1.html'
	        , controller: 'mainController'
	    }).when('/page2', {
	        templateUrl: 'pages/page2.html'
	        , controller: 'page2Controller'
	    }).when('/page3', {
	        templateUrl: 'pages/page3.html'
	        , controller: 'page3Controller'
	    }).otherwise({
	        redirectTo: '/'
	    });
	});

	routeApp.controller('mainController', function ($scope) {
	    $scope.message = 'This is a message from main controller';
	});
	routeApp.controller('page2Controller', function ($scope) {
	    $scope.message = 'This is a message from controller 2';
	});
	routeApp.controller('page3Controller', function ($scope) {
	    $scope.message = 'This is a message from controller 3';
	});