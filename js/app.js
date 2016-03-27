(function(){
  
  var app = angular.module("myApp", []);
  
  
  
  var show = function(page) { 
    
  }
  
  var MainController = function($scope, $log) {
    $scope.page = "about";
    
    $scope.show = function(pagestring) {
      
      $scope.page = pagestring;
      
    }
  }

  app.controller("MainController", ["$scope", MainController]);
}());