app.controller('MyController', function($scope, preloader) {
     $scope.imageLocations = [
                    "img/one.png",
                    "img/two.png",                   
      ];
      // Preload the images; then, update display when returned.
     preloader.preloadImages( $scope.imageLocations )
})