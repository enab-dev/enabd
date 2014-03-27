'use strict';

describe('Controller: NavCtrl', function () {

  // Load the controller's module
  beforeEach(module('enabdApp'));

  var NavCtrl,
    scope,
    location = {};

  // Mock of the location.path function
  location.path = function() { return '/home'; };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  // Test checkActive with data matching the path
  it('checkActive should return class active with /home', function () {
    expect(scope.checkActive('/home')).toBe('active');
  });

  // Test checkActive with data not matching the path
  it('checkActive should return undefined active with /about', function () {
    expect(scope.checkActive('/about')).toBe(undefined);
  });
});