'use strict';

/* Controllers */

angular.module('improvisation365.controllers', [])

.controller('ImprovisationCtrl', function($scope, $location) {
    $scope.members = [
        {
            "icon":"images/head-yunyenho.jpg",
            "name":"Yun-Yen Ho",
            "title":"Composor & Player"
        },
        {   
            "icon":"images/head-seasu.jpg",
            "name":"Seasu",
            "title":"Developer & Designer"
        },
        {
            "icon":"images/head-dars.jpg",
            "name":"Chung Dars",
            "title":"Photographer"
        },
        {
            "icon":"images/head-daniel.jpg",
            "name":"Daniel Tien",
            "title":"Photographer"
        }
    ];

    $scope.start = function(){
        // $location.hash('day1');
        // $anchorScroll();
        $location.path( "/days" );
    };
})

.controller('DaysCtrl', function($scope, $location, $anchorScroll) {
	$scope.totalDays = 365;
	$scope.finishDays = 80;
	$scope.progressPercent = Math.round(($scope.finishDays/$scope.totalDays)*100);
	$scope.progressPercent = 22;
    $scope.days = [
        {
            "day":"1",
            "type":"video",
            "video":"",
            "image":"images/bg04.jpg",
            "musicBy":"",
            "photoBy":""
        },
        {
            "day":"2",
            "type":"text",
            "video":"",
            "image":"images/bg05.jpg",
            "musicBy":"",
            "photoBy":""
        },
        {
            "day":"3",
            "type":"video",
            "video":"",
            "image":"images/bg01.jpg",
            "musicBy":"",
            "photoBy":""
        }
    ];
	// alert($scope.progressPercent);

})

;

