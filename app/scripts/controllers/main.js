'use strict';

/**
 * @ngdoc function
 * @name angularD3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularD3App
 */
angular.module('angularD3App')
.controller('MainCtrl', function ($scope, $http) {
    $http.get('data/sightings.json').success(function(result){
      $scope.sightings = result;

      $scope.renderer = 'bar';

      $scope.sightingsByDate = _(result)
        .chain()
        .countBy(function(sighting){return sighting.sightedAt.$date;})
        .pairs()
        .map(function(pair){
          return {
            x: new Date(parseInt(pair[0])).getTime()/1000,
            y: pair[1]
          };
        })
        .sortBy(function(dateCount){return dateCount.x;})
        .value();

    })
  });
