resourceApp.controller('customerrequirementsearachCtrl',['$scope','RAService',"$stateParams",'$state',function($scope,RAService,$stateParams,$state){
	  $scope.$on('$viewContentLoaded', function () {
			
			 $scope.edit();
	        })
	var registrationId = localStorage.getItem('registrationId');
	  var skills = localStorage.getItem('skills');
	  var jobCategory = localStorage.getItem('jobCategory');
	  var currentLocation = localStorage.getItem('jobLocation');
	  var yearsOfExperience = localStorage.getItem('totalExperience');
	  debugger;
	 	RAService.searchrequirementbyid(registrationId,skills,jobCategory,currentLocation,yearsOfExperience).then(function(data){
	 		$scope.requirement = data.result;
	 		console.log($scope.requirement)	
	 	})	 
	 	$scope.skills=["Java","jsp","Servlets","Spring","HTML","CSS","Bootstrap","Angularjs","Nodejs","Php","Phyton","MySQL","MongoDB","Oracle","SQL Server"];

	 	$scope.allListsfunc= function(){
			debugger;
	 		RAService.allreqLists().then(function(data){
	 	        $scope.skillslist = data.primarySkillset;
	 	        console.log($scope.list);
	 	       
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
	        $scope.edit = function(){
	        	RAService.postareqGetById($stateParams.postId).then(function(data){
						$scope.postrequirement = data.result;
						console.log($scope.postrequirement.primarySkills);
						console.log($scope.postrequirement);
						$scope.postrequirement.primarySkills = $scope.postrequirement.primarySkills.split(',');
						$scope.postrequirement.secondarySkills = $scope.postrequirement.secondarySkills.split(',');
						console.log($scope.postrequirement.primarySkills);
						console.log($scope.postrequirement.secondarySkills);
						}),
						function(err){
							if(err){
								$scope.errorMessage = err;
							}else{
								$scope.errorMessage = err;
						   }   
						}
	}
}]);


