define(['angular'], function(angular){

	var moduleName = 'todoApp';
	angular
		.module(moduleName, [])
		.directive('ngForm', function(){

			var template = '<form class="todo-form" ng-submit="add()">'+
				'<input class="new-todo" placeholder="What needs to be done?" ng-model="new"  autofocus />'+
				'</form>';

			return  {
				restrict: 'EA',
				
				scope: {
					new: '=',
					add: '&'
				},

				template: template
			}
		});	
	return moduleName;
});
