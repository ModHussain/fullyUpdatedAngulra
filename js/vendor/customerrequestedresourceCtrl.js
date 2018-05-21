resourceApp.controller('customerrequestedresourceCtrl',['$scope','RAService',function($scope,RAService) {	
	var registrationId = localStorage.getItem('registrationId');
	RAService.customerrequestedresource(registrationId).then(function(data){
        $scope.customerrequestedresource = data.result;
        console.log("customerrequestedresource.....................");
        console.log($scope.customerrequestedresource);
  })
  
  
  $scope.skills = [ "Java", "jsp", "Servlets", "Spring",
		"HTML", "CSS", "Bootstrap", "Angularjs", "Nodejs",
		"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
		"Sql Server" ];
$scope.allListsfunc= function(){
debugger;
RAService.allresLists().then(function(data){
$scope.skillslist = data.primarySkillset;
console.log($scope.allListsfunc);

});
}
$scope.companyfunc= function(){
RAService.allresLists().then(function(data){
$scope.company = data.vendorSet;

});
}
$scope.budgetfunc= function(){
RAService.allresLists().then(function(data){
$scope.budget = data.budgetSet;

});
}
$scope.experiencefunc=function(){
RAService.allresLists().then(function(data){
$scope.experience =data.yearsOfExperiencSet;
console.log($scope.experience)
})
}
$scope.locationfunc = function(){
RAService.allresLists().then(function(data){
$scope.location = data.currentLocationSet;
})
}
$scope.jobcategoryfunc = function(){
RAService.allresLists().then(function(data){
$scope.Jobc = data.jobCategorySet;
})
}
  
  
  
  $scope.dynamicsearch = function(primarySkills,jobCategory,jobLocation,experience){
		debugger;
		 RAService.searchrequirement(primarySkills,jobCategory,jobLocation,experience).then(function(data){
			   $scope.customerrequestedresource = data.result;
			   console.log($scope.customerrequestedresource);
			  
		   })			
	}
}]);
