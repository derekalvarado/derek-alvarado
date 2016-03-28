angular.module("myApp", ["ui.router"])

.controller("MainController", ['$scope', '$log', function($scope, $log) {
    $scope.page = "about";

    $scope.show = function(pagestring) {
        
        $scope.page = pagestring;
        
    }
}])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/about");
    
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html'
        })
        .state('thoughts', {
            url: '/thoughts',
            templateUrl: 'partials/thoughts.html'
        })
}) 
