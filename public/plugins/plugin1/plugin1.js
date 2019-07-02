
require('./styles/plugin1.css');
require('./services/plugin1.services.js');
require('./controller/plugin1.controller.js');

angular.module('mcube/plugin')
.config(function($routeProvider) {
	$routeProvider
	.when("/plugin1", {
      templateUrl : "plugins/plugin1/view/plugin1.html",
      controller:"plugin1Controller"
	})
});
