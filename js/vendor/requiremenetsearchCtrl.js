
resourceApp.controller('requirementsearachCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	  var skills = localStorage.getItem('skills');
	  var jobCategory = localStorage.getItem('jobCategory');
	  var currentLocation = localStorage.getItem('currentLocation');
	  var totalExperience = localStorage.getItem('totalExperience');
	  debugger;
	 	RAService.searchrequirement(skills,jobCategory,currentLocation,totalExperience).then(function(data){
	 		$scope.requirement = data.result;
	 		console.log($scope.requirement)	
	 	})
	 	$scope.skills = [ "java", "jsp", "servlets", "Spring",
			"Html", "Css", "Bootstrap", "Angularjs", "Nodejs",
			"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
			"Sql Server" ];
	 	$scope.allListsfunc= function(){
			debugger;
			RAService.allreqLists().then(function(data){
			$scope.skillslist = data.primarySkillset;
			console.log($scope.allListsfunc);

			});
			}
			$scope.companyfunc= function(){
			RAService.allreqLists().then(function(data){
			$scope.company = data.vendorSet;

			});
			}
			$scope.budgetfunc= function(){
			RAService.allreqLists().then(function(data){
			$scope.budget = data.budgetSet;

			});
			}
			$scope.experiencefunc=function(){
			RAService.allreqLists().then(function(data){
			$scope.experience =data.yearsOfExperiencSet;
			console.log($scope.experience)
			})
			}
			$scope.locationfunc = function(){
			RAService.allreqLists().then(function(data){
			$scope.location = data.currentLocationSet;
			})
			}
			$scope.jobcategoryfunc = function(){
			RAService.allreqLists().then(function(data){
			$scope.Jobc = data.jobCategorySet;
			})
			}
}]);

