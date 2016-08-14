todoapp.directive('ngForm', function(){

	var controller = ['$scope','localStorage', function($scope, localStorage){

		$scope.lstAll = localStorage.getStorage();

		$scope.addTodo = function(){
			var item = {
				value: $scope.new,
				checked: false
			};
		
			if ($scope.new) {
	        	$scope.lstAll.push(item);
	        	$scope.new = '';
	        	localStorage.setStorage($scope.lstAll);
	        }
		};
	}];
	var template = '<form class="todo-form" ng-submit="addTodo()">'+
				'<input class="new-todo" placeholder="What needs to be done?" ng-model="new"  autofocus />'+
				'</form>';

	return  {
		restrict: 'EA',
		controller: controller,
		template: template
	}

});