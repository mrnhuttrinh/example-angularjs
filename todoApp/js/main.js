require.config({
	
	paths: {
		'angular': './libs/angular.min',
		'angular-ui-router': './libs/angular-ui-router'
	},

	shim: {

		'angular': {
			exports: 'angular'
		},
		
		'angular-ui-router': {
			deps: ['angular']
		},
	},

});

require(['./app'], function (app) {
	app.init();
});