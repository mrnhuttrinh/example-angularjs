
define(['angular'],
	function(angular){
		return (['$scope','$stateParams', 'localStorage',
			function($scope, $stateParams, localStorage) {

				$scope.checkboxAll = false;
				$scope.lstCompleted = [];
				$scope.stateParams = $stateParams;
				$scope.completedCount = 0;

				$scope.lstAll = localStorage.getStorage();

				$scope.$watch('lstAll',function () {
						for(i = 0 ; i < $scope.lstAll.length ; i++){
							if($scope.lstAll[i].checked){
								$scope.completedCount ++;
							}
						}
						
						// localStorage.setStorage($scope.lstAll);

					}, true);

				$scope.$watchCollection('stateParams', function(){
					var status = $scope.status = $stateParams.status || '';
					$scope.typeFilter = (status === 'active') ?
						{ checked: false } : (status === 'completed') ?
						{ checked: true } : {};

				});

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


				$scope.remove = function(item){
					$scope.lstAll.splice($scope.lstAll.indexOf(item), 1);
					
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
				};

				$scope.updateTodo = function(item, value){
					var indexUpdate = $scope.lstAll.indexOf(item);
					if($scope.lstAll[indexUpdate].value !== value){
						$scope.lstAll[$scope.lstAll.indexOf(item)].value = value;
					}
					localStorage.setStorage($scope.lstAll);
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
				};
			}]);
		
		});
	


