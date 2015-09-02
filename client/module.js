var myApp = angular.module('myApp', ['ngRoute', 'ngCookies'] );
console.log("module");
myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: './views/partials/main.html'
    })
    .when('/register', {
    	templateUrl: './views/partials/register.html'
    })
    .when('/login', {
    	templateUrl: './views/partials/login.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});