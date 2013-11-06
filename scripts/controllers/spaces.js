'use strict';

angular.module('mapifyApp')
	.controller('MainCtrl', function($scope, $resource) {
		// Vars
		$scope.RESTurl = "http://api.mapify/"
		$scope.dataCat = ['co-working', 'hackerspaces', 'web-resource'];
		$scope.dataTyper = ['space'];
		// Creating a ngResource to consume RESTful service
		// RESTful service return geoJson data
		var req = $resource('http://api.mapify/space/co-working');
		// and putting the response value into the $scope 
		$scope._spaces = req.get();		
	});