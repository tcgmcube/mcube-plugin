
require('../css/main.css');
require('angular-route');
var angular = require('angular');

var mcubeMainApp = angular.module('mcube/plugin', ["ngRoute"]);
mcubeMainApp.config(function($routeProvider) {
	$routeProvider
	.when("/home", {
		templateUrl : "main/view/home.html"
	  })
	.otherwise("/home", {});
})
.controller("customPageController",function($scope, $http, $location) {
	//console.log("Main Controller");
	$scope.getClass = function (path) {
		return ($location.path().substr(0, path.length) === path) ? 'active' : '';
	  }
});

require('./plugin_register.js');

