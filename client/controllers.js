var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.controller('usersController', ['$scope', '$cookies', '$location', 'userFactory', function($scope, $cookies, $location, userFactory){
	$scope.currentUser = {};

	if($cookies.get("first_name")) {
		$scope.currentUser['first_name'] = $cookies.get('first_name');
	}

	$scope.addUser = function(){
		userFactory.addUser($scope.newUser, function(data){
			$scope.currentUser = data;
			$cookies.put('first_name', data.first_name);
			$cookies.put('last_name', data.first_name);
			$cookies.put('_id', data._id);
		});
	};

	// $scope.loginUser = function(){
	// 	userFactory.getUser($scope.loginUser, function(data))
	// }
	
	$scope.logoutUser = function(){
		$cookies.remove("first_name");
		$cookies.remove("last_name");
		$cookies.remove("_id");
		$scope.currentUser = {};
		$location.path('/');
	}
}]);