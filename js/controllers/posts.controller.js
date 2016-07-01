angular.module('myApp')
  .controller('PostsController', PostsController)

PostsController.$inject = ['$log', '$scope', '$state', '$rootScope', '$window']
function PostsController($log, $scope, $state, $rootScope, $window) {
  var vm = this;



  $rootScope.$on('$viewContentLoaded', function(e) {
    console.log("viewContentLoaded");

    var script = document.createElement('script');
    script.src = "js/pagemodules/playing-with-canvas.js";
    script.async = false;
    document.head.appendChild(script);

  })
}