'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
    })
    .state('pase', {
        url: '/pase',
        templateUrl: 'partials/pase.html',
        controller: 'paseCtrl'
    })
    .state('pase.create', {
        url: '/create',
        templateUrl: 'partials/pase-create.html',
        controller: 'paseCtrl'
        
    })
    .state('pase.view', {
        url: '/view',
        templateUrl: 'partials/pase-view.html',
        controller: 'paseCtrl'
        
    })
    .state('open', {
        url: '/open',
        templateUrl: 'partials/open.html',
        controller: 'openCtrl'
    })
    .state('trip', {
        url: '/trip',
        templateUrl: 'partials/trip.html',
        controller: 'tripCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html',
        controller: 'contactCtrl'
    });
 
}]);
myApp.controller('homeCtrl', ['$scope', function($scope){
	$scope.welcomemsg="welcome to Home Page";
}]);

myApp.controller('paseCtrl', ['$scope', function($scope){
	$scope.welcomemsg="welcome to Pase Schedules Page";
	/*$scope.createPase =[ "Product 1","Product 2","Product 3 Speaker","CD 1 Speaker","CD 2 Speaker", "Book Speaker","System topic Speaker", "Wrap up Speaker"];*/
}]);

myApp.controller('openCtrl', ['$scope', function($scope){
	$scope.welcomemsg="welcome to Open meeting details Page";
}]);

myApp.controller('tripCtrl', ['$scope', function($scope){
	$scope.welcomemsg="welcome to Trip Details Page";
}]);

myApp.controller('contactCtrl', ['$scope', function($scope){
	$scope.welcomemsg="welcome to Contact Us Page";
}]);

myApp.controller('aboutCtrl', ['$scope', function($scope){
	$scope.welcomemsg="welcome to About Us Page";
}]);