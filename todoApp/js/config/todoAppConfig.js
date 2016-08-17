define(function(){
	var moduleName = function($stateProvider, $urlRouterProvider){
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
	}
	return moduleName;

});