'use strict';

/* Controllers */

angular.module('improvisation365.controllers', []).
    controller('Section1Ctrl', function($scope) {
    	$scope.totalDays = 365;
    	$scope.finishDays = 80;
    	$scope.progressPercent = ($scope.finishDays/$scope.totalDays)*100;
    	$scope.progressPercent = 22;
    	// alert($scope.progressPercent);
        $scope.start = function(){
        	alert('start click!');
        };
    });

