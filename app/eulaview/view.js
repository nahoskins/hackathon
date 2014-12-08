'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'eulaview/view2.html',
    controller: 'EulaListCtrl'
  });
}])

.controller('EulaListCtrl', ['$scope', 'Eula', function($scope, Eula) {
  $scope.eula = Eula.query(3);
	console.log($scope.eula);
}]);

