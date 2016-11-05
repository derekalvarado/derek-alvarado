angular.module('myApp')
  .controller('PostsController', PostsController)

PostsController.$inject = ['$log', '$scope', '$state',  '$stateParams','$rootScope', '$window']
function PostsController($log, $scope, $state, $stateParams, $rootScope, $window) {
  var vm = this;

  console.log($stateParams);

  $rootScope.$on('$viewContentLoaded', function(e) {
    console.log("viewContentLoaded");

    var script = document.createElement('script');
    script.src = "js/pagemodules/"+$stateParams.name+".js";
    script.async = false;
    document.head.appendChild(script);

  })
}