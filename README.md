# Angular JS Easy Image Preloader

Inspired heavily by [this] blog post. Credit for preloader code goes to Ben Nadel.

### Step 1: 

Install angular-easy-image-preloader via NPM

    npm install angular-easy-image-preloader --save

### Step 2: 

Load script in your main view

    <script src="node_modules/angular-easy-image-preloader/dist/preloader.min.js"></script>

### Step 3: 

Include the preloader app in your app:

    angular.module('example', ['angular-easy-image-preloader']);

### Step 4: 

Include the preloader service in your controller:

    app.controller('MyController', function($scope, preloader) {}

### Step 5:

Pass in an array of images for the preloader:

    $scope.imageLocations = [
        "img/one.png",
        "img/two.png",  
        "img/three.png",  
        ...               
     ];

### Step 6:

Call the preloader.preloadImages function, passing in your array of images:
    
    preloader.preloadImages( $scope.imageLocations )

preloader.preloadImages returns a promise, so you could also handle the promise like so:	

	preloader.preloadImages( $scope.imageLocations )
	.then(function() {
	    // Loading was successful.
	},
	function() {
	    // Loading failed on at least one image.
	});

#### That's it!

[this]: http://www.bennadel.com/blog/2597-preloading-images-in-angularjs-with-promises.htm