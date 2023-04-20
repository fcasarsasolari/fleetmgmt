var appServices = angular.module('appServices', ['ngResource']);

appServices.service('HelloService', function() {
    this.hello = function(a, b) { return "" };
});

