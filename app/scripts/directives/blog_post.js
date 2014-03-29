'use strict';

angular.module('enabdApp')
.directive('dbBlogPost', function(){
	// Runs during compile
	return {
		name: 'dbBlogPost',
		// priority: 1,
		// terminal: true,
		scope: { post: '=' }, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'views/blog_post.html',
		replace: true,
		transclude: false,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		// link: function($scope, iElm, iAttrs, controller) {
		// 	$scope.post = scope.post;
		// }
	};
})
.filter('tagsplit', function() {
	return function(input) {
		return input.toString().replace(/,/g, ', ');
	}
})
.filter('formatdate', function() {
	return function(date) {
		var monthNames = ["January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];

		return monthNames[date.getMonth()] + ' ' + date.getDay() + ', ' + date.getFullYear();
	}
});