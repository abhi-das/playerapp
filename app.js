;(function(){
	
	var agApp = angular.module("countryApp",["playerAPIMod.service","drvModuleCtrl","ngRoute","ngAnimate"]);
	
	agApp.config(["$routeProvider", function($routeProvider){
		
		$routeProvider
		.when("/drv",{
			templateUrl: "partials/drv.html",
			controller: "testDrv"
		})
		.when("/drv/:id",{
			templateUrl: "partials/player-details.html",
			controller: "playerDetailCtrl"
		})
		.when("/anim",{
			templateUrl: "partials/animation.html",
			controller: "testAnim"
		})
		.otherwise({
			redirectTo : "/drv"
		});		
		
	}]);
	
	
	
	
}());