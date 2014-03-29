'use strict';

angular.module('enabdApp')
	.controller('NavCtrl', function($scope, $location) {
		$scope.checkActive = function(route) {
			if (route === $location.path()) {
				return 'active';
			}
		};
	});