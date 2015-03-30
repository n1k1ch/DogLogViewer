console.log('running app.js');

angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
	console.log('configuring app');

	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {templateUrl: '/partials/main/main', controller: 'dlMainCtrl'})
		.when('/test', {templateUrl: '/partials/test/test', controller: 'dlTestCtrl'});

});