resourceApp.controller('planCtrl',['$scope','RAService',function($scope,RAService){
	$scope.$on('$viewContentLoaded', function () {
		$scope.getplans();
		$scope.plan={};
	})
	
	$scope.getplans = function(){
		RAService.buynow().then(function(data){
			debugger;
			$scope.UserDetails = data.result;
			console.log($scope.UserDetails);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		});
	}

	$scope.statusplan = function(plan){
		debugger;
		if(plan.status == "Active"){
			plan.status = "InActive";
		RAService.planStatus(plan).then(function(data){
			$scope.plan = data.result;
			console.log($scope.plan);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
		} else {
			plan.status = "Active";
			RAService.planStatus(plan).then(function(data) {
				$scope.plan = data.result;
				console.log($scope.plan);
			}, function(err) {
				if (err) {
					$scope.errorMessage = err;
				}
			})
		}
}
	}]);