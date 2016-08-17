requirejs.config({
		
	paths: {
		'angular' : 'js/libs/angular.min',
		'angular-ui-router': 'js/libs/angular-ui-router',
		'jquery': 'js/libs/jquery.min',
		'bootstrap': 'js/libs/bootstrap.min',
		'app': 'js/app'

	},
	
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-ui-router': {
			deps: [ 'angular' ]
		},
		'bootstrap': {
			deps: ['jquery']
		}
	},
});

require([ 'angular', 'angular-ui-router','app'], function (angular,angularuirouter) {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['todoApp']);
	});
});
