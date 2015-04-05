angular.module('app').controller('dlLogsCtrl', function($scope, $http) {
	console.log('init Logs Ctrl');

	$scope.logs = [{Name: 'Test Log 1', _id: 1}];
});