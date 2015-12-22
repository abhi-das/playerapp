;(function(){
	
	var srv = angular.module("playerAPIMod.service", []);
	
	srv.factory("playerAPISer",["$http", function($http){
		
		var playerSrv = {};
		
		playerSrv.getPlayer = function(){
		
			return $http({
				method: 'JSONP',
				url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
			});
		}
		playerSrv.getPlayerDetails = function(id){
			
			return $http({
				method: "JSONP",
				url: "http://ergast.com/api/f1/2013/drivers/"+ id +"/driverStandings.json?callback=JSON_CALLBACK"
			});			
		}
		return playerSrv;
		
	}]);
	
	
}());