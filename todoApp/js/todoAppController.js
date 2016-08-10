var todoapp = angular.module( "todoApp", ['ui.router'] );

todoapp.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
	    .state('home', {
	      url: '/',
	      templateUrl: 'todoApp.html'
	    })
	    .state('todo', {
	      url: '/:status',
	      templateUrl: 'todoApp.html',
	      controller: function($scope, $stateParams) {
	        $scope.status = $stateParams.status;
	        console.log($scope.status);
	      }
	    });
	    
	  $urlRouterProvider.otherwise('/');
});

todoapp.controller("todoAppController",function($scope, $stateParams){

		$scope.checkboxAll = false;
		$scope.lstAll = JSON.parse(localStorage.getItem('locname') || "[]");
		$scope.lstCompleted = [];
		$scope.stateParams = $stateParams;

		$scope.$watch(
			function () {
				$scope.completedCount = 0;
				for(i = 0 ; i < $scope.lstAll.length ; i++){
					if($scope.lstAll[i].checked){
						$scope.completedCount ++;
					}
				}
			}
		);

		$scope.$watchCollection('stateParams', function(){
    		var status = $scope.status = $stateParams.status || '';
			$scope.typeFilter = (status === 'active') ?
				{ checked: false } : (status === 'completed') ?
				{ checked: true } : {};

		});

		$scope.addTodo = function(keyEvent){
			var item = {
				value: $scope.new,
				checked: false
			};
			if (keyEvent.which === 13){
				if($scope.new != '' && $scope.new != '	'){
					$scope.lstAll.push(item);
				 	localStorage.setItem('locname', JSON.stringify($scope.lstAll));
					$scope.new = '';
				}
			}
		};


	 	$scope.remove = function(item){
	 		$scope.lstAll.splice($scope.lstAll.indexOf(item), 1);
	 		localStorage.setItem('locname', JSON.stringify($scope.lstAll));
		};

		$scope.addAllCompleted = function(checked){
	  		for(i = 0 ; i< $scope.lstAll.length ; i++){
	  			if($scope.lstAll[i].checked !== checked){
	  				$scope.changeList($scope.lstAll[i], checked);
	  			}
	  		}
		};

		$scope.changeList = function(item, checked){
			var index = $scope.lstAll.indexOf(item);
	  		if(angular.isDefined(checked)){
	  			$scope.lstAll[index].checked = checked;
	  		}
	  		localStorage.setItem('locname', JSON.stringify($scope.lstAll));
		};

		$scope.updateTodo = function(item, value){
			var indexUpdate = $scope.lstAll.indexOf(item);
			if($scope.lstAll[indexUpdate].value !== value){
				$scope.lstAll[$scope.lstAll.indexOf(item)].value = value;
			}
			localStorage.setItem('locname', JSON.stringify($scope.lstAll));
		};

		$scope.removeAll = function(){
	  		for(i = 0; i< $scope.lstAll.length; i++){
	  			if($scope.lstAll[i].checked){
	  				$scope.lstCompleted.push($scope.lstAll[i]);
	  			}
	  		}
	  		angular.forEach($scope.lstCompleted, function (value, index) {
	            $scope.lstAll.splice($scope.lstAll.indexOf(value), 1);
	        });
	        $scope.lstCompleted = [];
	        localStorage.setItem('locname', JSON.stringify($scope.lstAll));
		};		
});

