'use strict';

/* Controllers */

angular.module('improvisation365.controllers', []).
    controller('Section1Ctrl', function($scope, $location, $anchorScroll) {
    	$scope.totalDays = 365;
    	$scope.finishDays = 80;
    	$scope.progressPercent = Math.round(($scope.finishDays/$scope.totalDays)*100);
    	$scope.progressPercent = 22;
    	// alert($scope.progressPercent);
        $scope.start = function(){
            // $location.hash('day1');
            // $anchorScroll();
            $.scrollTo('#day1', 300)
        };
    });

