if (new Set([0]).size === 0) {
    //constructor doesnt take an iterable as an argument - thanks IE
    const BuiltinSet = Set;
    Set = function Set(iterable) {
        const set = new BuiltinSet();
        if (iterable) {
            iterable.forEach(set.add, set);
        }
        return set;
    };
    Set.prototype = BuiltinSet.prototype;
    Set.prototype.constructor = Set;
}

var appControllers = angular.module('appControllers', ['appServices', 'appDirectives', 'ngMaterial', 'ngMessages']);

appControllers.controller('homeCtrl', ['$scope', '$log', '$http', function($scope, $log, $http) {

}]);






appControllers.controller('bodyCtrl', ['$scope', '$log', '$location','$http' ,'$rootScope',
    function($scope, $log, $location,$http,$rootScope) {
        $rootScope.user = {};
        $http.get("/api/authenticated").then(function(res) {
              $rootScope.user = res.data.clientPrincipal;
//            console.log(res);
        },function(err) {
            console.log(err);
        });
        
        
    }
]);



appControllers.controller('accountCtrl', ['$scope', '$log', '$location','$http' ,'$rootScope',
    function($scope, $log, $location,$http,$rootScope) {

    }
]);

