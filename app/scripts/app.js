'use strict';

angular.module('enabdApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      // route for the homepage
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // route for the services page
      .when('/services', {
        templateUrl : 'views/services.html',
        controller  : 'ServicesCtrl'
      })
      // route for the blog page
      .when('/blog', {
        templateUrl : 'views/blog.html',
        controller  : 'BlogCtrl'
      })
      // route for the about page
      .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'AboutCtrl'
      })
      // route for the contact page
      .when('/contact', {
        templateUrl : 'views/contact.html',
        controller  : 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
