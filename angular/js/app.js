var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope,$http) {
	//below code is use for get thet data fron an json file
	$http.get('js/data.json').then(function(response){
		$scope.artists = response.data;
		$scope.artistOrder = 'name';
	});
	
});
