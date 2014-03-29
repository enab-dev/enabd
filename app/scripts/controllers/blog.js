'use strict';

angular.module('enabdApp')
	.controller('BlogCtrl', function($scope) {

		$scope.posts = [{
			'date': new Date(),
			'title': 'Awesome blog post',
			'body': 'This is a really awesome blog post by a really awesome dude!',
			'author': 'bane',
			'permalink': 'awesome-blog-post',
			'tags': ['Blogging', 'Angular.js']
		},
		{
			'date': new Date(),
			'title': 'Anoter awesome blog post',
			'body': 'This is another really awesome blog post by a really awesome dude!',
			'author': 'someone',
			'permalink': 'another-awesome-blog-post',
			'tags': ['Blogging', 'Directives', 'Filters']
		}];

		$scope.message = 'Blog coming soon!';
	});