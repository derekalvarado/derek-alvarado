angular.module("myApp", [])
.controller("MainController", ['$scope', '$log', function($scope, $log) {
    $scope.page = "about";

    $scope.show = function(pagestring) {
        
        $scope.page = pagestring;
        
    }
}]) 
