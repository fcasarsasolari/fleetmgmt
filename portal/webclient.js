var app = angular.module('ngApp', ['ngRoute','ngSanitize', 'ngMaterial', 'appControllers','ngMessages']);

app.config(['$mdThemingProvider',function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('blue-grey')
}]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        }).

        otherwise({
            redirectTo: '/home'
        });
    }
]);

