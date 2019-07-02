
require('./styles/plugin2.css');
/*
 * include the service and controller file here using require
 * 
 */

angular.module('mcube/plugin')
.config(function($routeProvider) {
	$routeProvider
	.when("/plugin2", {
      templateUrl : "plugins/plugin2/view/plugin2.html"
      //controller:"<Controller name>"
	})
});
