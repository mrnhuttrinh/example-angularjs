
define([ 
	'angular', 
	'js/config/todoAppConfig',
	'js/service/todoAppStorage',
	'js/controller/todoAppController',
	'js/directive/todoAppDirective'
], function(angular, config, service,controller, directive) {
	var todoapp = angular.module( 'todoApp', ['ui.router'] );
	todoapp
		.config(config)
		.factory('localStorage', service)
		.controller('todoAppController',controller)
		.directive('myForm', directive);
	return todoapp;
});