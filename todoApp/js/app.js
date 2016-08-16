define([
	'angular', 
	'./service/todoAppStorage',
	'./controller/todoAppController',
	'./directive/todoAppDirective'
	], function (angular, todoStorage , todoCtrl, todoDir) {
	// var angular = require('angular');
	// var service = require('./service/todoAppStorage');
 //  	var controller = require('./controller/todoAppController');
 //  	var directive = require('./directive/todoAppDirective');

 	var app = angular.module('todoApp',  [todoStorage , todoCtrl, todoDir]);
 	app.init = function(){
 		angular.bootstrap(document, ['todoApp']);
 	}

    app.config(['$stateProvider', '$urlRouterProvider'], function($stateProvider, $urlRouterProvider){

         $stateProvider
             .state('home', {
                 url: '/',
             })
             .state('todo', {
                 url: '/:status',
                 controller: function($scope, $stateParams) {
                    $scope.status = $stateParams.status;
                    // console.log($scope.status);
                 }
             });
            
         $urlRouterProvider.otherwise('/');
     });

	return app;

});