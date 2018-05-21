resourceApp.controller('customerlistCtrl',['$scope','$document','RAService',function($scope,$document,RAService){
	$scope.$on('$viewContentLoaded', function () {
		//$scope.registration = {};
		//$scope.registrationlist();
		$scope.getRegister();
	})

	
	
	$scope.getRegister = function() {
		$scope.id=localStorage.getItem('registrationId');
		RAService.getRegistrationById($scope.id).then(
				function(data) {
					$scope.registration = data.result;
					console.log($scope.registration);
					
				}, function(err) {
					if (err) {
						$scope.errorMessage = err;
					}
				})
	}
	
	
	
	
	
	
	
	
	
	
	
}]);