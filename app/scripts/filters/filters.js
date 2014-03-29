'use strict';

angular.module('enabdApp')
	.filter('tagsplit', function() {
		return function(input) {
			return input.toString().replace(/,/g, ', ');
		};
	})
	.filter('formatdate', function() {
		return function(date) {
			var monthNames = ['January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];

			return monthNames[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear();
		};
	});