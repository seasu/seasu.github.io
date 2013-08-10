'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('improvisation365', [
    'improvisation365.filters', 
    'improvisation365.services', 
    'improvisation365.directives', 
    'improvisation365.controllers',
    'ui.bootstrap']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/improvisation.html',   controller: 'ImprovisationCtrl'}).
      when('/days/:dayId', {templateUrl: 'partials/day.html', controller: 'DayCtrl'}).
      otherwise({redirectTo: '/'});
}]);
