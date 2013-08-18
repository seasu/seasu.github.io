'use strict';

/* Controllers */

angular.module('improvisation365.controllers', [])

.controller('ImprovisationCtrl', function($scope, $location) {
    $scope.members = [
        {
            "icon":"images/head-yunyenho.jpg",
            "name":"Yun-Yen Ho",
            "title":"Musician"
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
            "video":"//www.youtube.com/embed/4r6Ec1WLsyo?list=PLYEWzeblwmTvAt0h6nyTLeykroN1_l22K",
            "photo":"https://lh4.googleusercontent.com/-GkIXeT8yytM/Ug6YXdVz-LI/AAAAAAAB5cA/lzp8N73c-xQ/w973-h649-no/R1029289.jpg",
            "musicBy":"Yun-Yen Ho",
            "musicianIcon": "images/head-yunyenho.jpg",
            "photoBy":"Chung Dars",
            "photographerIcon": "images/head-dars.jpg",
            "tabOn":"photo"
        },
        {
            "day":"99",
            "type":"text",
            "video":"//www.youtube.com/embed/Zy7rUl6dyEY?list=PLYEWzeblwmTvAt0h6nyTLeykroN1_l22K", //先用Day0的
            "photo":"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-prn1/536112_622560684426466_1595805616_n.jpg",
            "musicBy":"Yun-Yen Ho",
            "musicianIcon": "images/head-yunyenho.jpg",
            "photoBy":"Daniel Tien",
            "photographerIcon": "images/head-daniel.jpg",
            "tabOn":"video"
        },
        {
            "day":"365",
            "type":"video",
            "video":"//www.youtube.com/embed/Xlsgmq6Uubc?list=PLYEWzeblwmTvAt0h6nyTLeykroN1_l22K",
            "photo":"https://lh4.googleusercontent.com/-Fjm0EQDWavQ/UfblHgqWuSI/AAAAAAABxgw/zOk8T4Asw7U/w1114-h627-no/DSC04445.JPG",
            "musicBy":"Yun-Yen Ho",
            "musicianIcon": "images/head-yunyenho.jpg",
            "photoBy":"Chung Dars",
            "photographerIcon": "images/head-dars.jpg",
            "tabOn":"photo"
        }
    ];
	// alert($scope.progressPercent);

    $scope.switchTo=function(day){
        if(day.tabOn === "photo"){
            day.tabOn = "video";
        }else{
            day.tabOn = "photo";
        }
    };
})

;

