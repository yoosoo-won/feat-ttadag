var app = angular.module('ttadag-service-app',['app', 'ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller : 'appModuleController',
			templateUrl : '/src/introLoading/introLoadingView.html'
		});
		//.when('/account', {
		//	controller : 'accountController',
		//	templateUrl : '/src/account/accountView.html'
		//})
		//.when('/account/signIn', {
		//	controller : 'signInController',
		//	templateUrl : '/src/account/signIn/signInView.html'
		//})
		//.when('/account/signUp', {
		//	controller : 'signUpController',
		//	templateUrl : '/src/account/signUp/signUpView.html'
		//});
});