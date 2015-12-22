;(function(){
	
	var drvCtrl = angular.module("drvModuleCtrl",["playerAPIMod.service"]);
	
	drvCtrl.controller("testDrv", ["$scope", "$document", "playerAPISer", function( $scope, $document, playerAPISer ){
		
		$scope.driversList = [];

		$scope.showBio = false;
		
		$scope.playerInfo = null;
		
		//$scope.nameFilter = null;
		/*$scope.searchBy = function(drv){
			var keyword = new RegExp( $scope.nameFilter, "i");
			return !$scope.nameFilter || keyword.test(drv.Driver.givenName) || keyword.test(drv.Driver.familyName);
		};*/
		
		//console.log( playerAPISer.getPlayer() )
		playerAPISer.getPlayer().success(function( response ){
			
			$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			//console.log( $scope.driversList[] );
		});	

		//
		$scope.toggleBio = function(){
			($scope.showBio) ? $scope.showBio=false : $scope.showBio=true;
		};
		$scope.slideBioHandler = function(id){
			
			//var showBioViz = angular.element($document[0].querySelector(".drv-bio")).hasClass('ng-hide');

			$scope.showBio=true;
			$scope.getPlayerInfo(id);
		};
		//
		$scope.getPlayerInfo = function(playerId){
			
			playerAPISer.getPlayerDetails(playerId).success(function( response ){
				$scope.playerInfo = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
			});
		}
		
	}]);
	
	drvCtrl.controller("playerDetailCtrl",["$scope", "$routeParams", "playerAPISer", function( $scope, $routeParams, playerAPISer ){
		
		$scope.id = $routeParams.id;
		$scope.drvInfo = null;
		//console.log("playerDetailCtrl init.."+$routeParams.id);
		playerAPISer.getPlayerDetails($scope.id).success(function( response ){
			$scope.drvInfo = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
		});
		
	}]);
	
	drvCtrl.controller("testAnim",["$scope", function( $scope ){
		$scope.slide = false;
		console.log( "Animate>>" );
	}]);
	
}());


