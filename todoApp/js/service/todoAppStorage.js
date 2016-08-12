todoapp.factory('localStorage', function () {
	var storage_name= 'todos-angularjs';

	return{
		getStorage: function(){
			return JSON.parse(localStorage.getItem(storage_name) || "[]");
		},
		setStorage: function(items){
			localStorage.setItem(storage_name, JSON.stringify(items));
		}
	}
});
