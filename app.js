(function() {

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.lunchMenu = "";
	$scope.message = "";
	
	$scope.checkLunch = function() {
		if($scope.lunchMenu == "" || $scope.lunchMenu.trim() == "") {
			$scope.message = "Please enter data first";
		} else {
			lunchItems = $scope.lunchMenu.split(",");
			if(lunchItems.length < 4) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		}
	}
}
	
})();