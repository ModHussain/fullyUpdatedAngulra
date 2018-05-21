resourceApp.controller('resourcecategoryCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	  var registrationId = localStorage.getItem('registrationId');
	  var skills = localStorage.getItem('skills');
	  var jobCategory = localStorage.getItem('jobCategory');
	  var jobLocation = localStorage.getItem('jobLocation');
	  var totalExperience = localStorage.getItem('totalExperience');
	 	RAService.searchresourcebyid(registrationId,skills,jobCategory,jobLocation,totalExperience).then(function(data){
	 		debugger;
	 		$scope.resourcejobcat = data.result;
	 		console.log($scope.resourcejobcat)	

	 	})
	 	$scope.skills = [ "Java", "jsp", "Servlets", "Spring",
							"HTML", "CSS", "Bootstrap", "AngularJs", "Nodejs",
							"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
							"SQL Server" ];
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
		     $scope.getResourceById = function(){
		    	 $scope.resource.registrationId = $scope.comId;
		        	RAService.resourcegetById($stateParams.resourceId).then(function(data){
							$scope.resource = data.result;
							$scope.resource.dateOfBirth = new Date(
									$scope.resource.dateOfBirth);
							console.log($scope.resource.primarySkills);
							console.log($scope.resource);
							$scope.resource.primarySkills = $scope.resource.primarySkills.split(',');
							$scope.resource.secondarySkills = $scope.resource.secondarySkills.split(',');
							 $scope.resource.preferredLocation=$scope.resource.preferredLocation.split(',');
							console.log($scope.resource.primarySkills);
							console.log($scope.resource.secondarySkills);
							}),
							function(err){
								if(err){
									$scope.errorMessage = err;
								}else{
									$scope.errorMessage = err;
							   }   
							}
		}

	 

	 
	 	 $scope.requestResource1 = function(_id,vendorId){
		 	var requirementId =   localStorage.getItem('requirementId');
		 	var registrationId =   localStorage.getItem('registrationId');
		 	debugger;
		 	RAService.postResourceCustomer(requirementId,_id,registrationId,vendorId).then(function(data){
			 		//$scope.resourcelist = data;
			 		console.log(data.result);
			 		alert("success");
			 	})	
		 	}	
	 	 

}]);
