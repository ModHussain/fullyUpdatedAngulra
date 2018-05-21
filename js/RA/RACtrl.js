resourceApp.controller('RACtrl',['$scope','$state','BlogPostService','RAService',function($scope,$state,BlogPostService,RAService){
	$scope.$on('$viewContentLoaded', function () {
		$scope.menulist();		
	})
		var user = localStorage.getItem('use');
		var admin =localStorage.getItem('admi');
	   $scope.vvv = localStorage.getItem('registrationType');
	  /* RAService.menuget(admin,$scope.vvv).then(function(data){
		   $scope.meneu = data;
	   })*/
		$scope.register =  $scope.vvv.split(',');
		console.log($scope.register);
		$scope.model = "RA";
		$scope.dataregister = function(){
			
			if($scope.registerData == "RA"){
				
				$state.go('RA.dashboard');
			}
			if($scope.registerData == "vendor"){
				$scope.model = "vendor";
				$state.go('vendor.dashboard');
			}
			if($scope.registerData == "customer"){
				$scope.model = "customer";
				$state.go('customer.dashboard');
			}
			
		}
		

		$scope.menulist = function(){
		   	debugger; 
		   	RAService.MenuListnew().then(function(data){
		       		$scope.list=data.result;
		       		console.log($scope.list);	
		       		
		       },function(err){
		       if(err){
		           $scope.errorMessage = err; 
		      	 }
		       })		       
		};
		
		
		$scope.PlanGetById=function(){
			debugger;
		var registrationId=	localStorage.getItem('registrationId');
			RAService.GetPlanById(registrationId).then(function(data){
		       		$scope.planlist=data.result;
		       		debugger;
		       		console.log($scope.planlist);      		
		       		
		       },function(err){
		       if(err){
		           $scope.errorMessage = err; 
		      	 }
		       })	
			}
		
	
}])