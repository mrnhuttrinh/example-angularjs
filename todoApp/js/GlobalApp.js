window.todoapp = angular.module( 'todoApp', ['ui.router'] );

todoapp.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/',
		})
		.state('todo', {
			url: '/:status',
			controller: function($scope, $stateParams) {
				$scope.status = $stateParams.status;
				console.log($scope.status);
			}
		});
	
	$urlRouterProvider.otherwise('/');
});
