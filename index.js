angular.module('mainApp', [])
	.controller('navCtrl', function($scope) {
		$scope.langList = [
			{id: 1, name: 'russian'},
			{id: 2, name: 'kaz'}
		]
	})