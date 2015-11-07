'use strict';

/**
 * @ngdoc function
 * @name angularD3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularD3App
 */
angular.module('angularD3App')
  .controller('MainCtrl',['$scope', '$http', function ($scope, $http) {

      $http.get('data/sightings.json')
        .success(function(mockData){
          $scope.sightings = mockData;
        })

  }]);
