angular.module('app').controller('dlTestCtrl', function($scope, $http){
	console.log('init dlTestCtrl');
	$http.get('/testLogData').
		success(function(data, status, headers, config){
			console.log("success getting /testLogData");
			console.log(data);
			$scope.log = data;//angular.fromJson(data);
		}).
		error(function(data, status, headers, config){
			console.log("Error getting /testLogData");
			console.log(status);
			console.log(data);
		});

	$scope.currentSortField = "Date";

	$scope.reverse = false;

	$scope.sortBy = function(sortField) {
		if($scope.currentSortField === sortField) {
			$scope.reverse = !$scope.reverse;
		} else {
			$scope.reverse = false;
			$scope.currentSortField = sortField;
		}
	}

	$scope.sortField = function() {
		return $scope.reverse ? "-" + $scope.currentSortField : $scope.currentSortField;
	}
});