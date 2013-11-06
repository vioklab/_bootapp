'use strict';

var module = angular.module('mapifyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngResource'
]);

  module.config(function ($routeProvider) {
    // MAIN
    $routeProvider
      .when('/', {
        templateUrl: 'views/bootstrap.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    
    
  });
