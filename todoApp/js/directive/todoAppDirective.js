todoapp.directive('ngForm', function(){

	var controller = ['$scope', function($scope){

		$scope.addTodo = function(){
			var item = {
				value: $scope.new,
				checked: false
			};
		
			if ($scope.new) {
	        	$scope.lstAll.push(item);
	        	$scope.new = '';
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