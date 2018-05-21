resourceApp.controller('customerpostareqCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	$scope.Selectors =["jobCategory","experience","jobLocation"];
    $scope.SelectedCriteria = ""; 
    $scope.filterValue = "";
    
    
	$scope.$on('$viewContentLoaded', function () {
		$scope.postrequirement = {};
		$scope.postareq();
		
	})
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
	/*$scope.States=["Hyderabad","Vijayawada","Vizag","Bangalore","Chennai","Madurai","Kolkata","Pune","Mumbai","Noida","Delhi","Jaipur","Darjeeling","Kerala"];

	
	
	$scope.Jobc=["Application Developer", "Applications Engineer","Database Administrator","Front End Developer","Java Developer","Junior Software Engineer","Network Engineer",
		
		"Senior Database Administrator","Senior Programmer","Senior Security Specialist","Senior Web Developer","Software Architect","Systems Designer","Software Developer",
		"Web Administrator","Web Developer"];
	*/	$scope.skills=["java","jsp","servlets","Big-Data","Hadoop","RPA","JDBC","HTML5","Spring","Html","Css","Bootstrap","Angularjs","Nodejs","Php","Phyton","MySQL","MongoDB","Oracle","Sql Server"];
		/*$scope.experience=["0-1 years","1-2 years","2-3 years","3-4 years","4-5 years","5-6 years","more"];
		$scope.company=["TCS","Tech M","Oracle","IBM","Ojas","HCL","Wipro","Info-tech","CapGemini","Persistant","Virtusa","Infosys"];
*/	$scope.postareq = function(){
		debugger;
		$scope.local = localStorage.getItem('registrationId');
		RAService.customeraddrequirment($scope.local).then(function(data) {
	        $scope.list = data.result;
	        console.log($scope.list);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
	}
	$scope.postFilter = function(){
//		debugger;
        var filter = {
        		jobCategory: $scope.SelectedCriteria,
        		consultant: $scope.filterValue
        };
        RAService.postReqfilter(filter).then(function(response){
           $scope.list = response.result.data;
           console.log($scope.list);
       },function(err){
       if(err){
           $scope.errorMessage = err;
       }
   })
}
	
	
	
	$scope.requirement = function(postrequirement){
		
		if(postrequirement.status == "Active"){
			postrequirement.status = "Inactive";
		RAService.requirementStatus(postrequirement).then(function(data){
			$scope.aaaa = data.result;
			console.log($scope.aaaa);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
		}else{
			postrequirement.status = "Active";
		RAService.requirementStatus(postrequirement).then(function(data){
			$scope.aaaa = data.result;
			console.log($scope.aaaa);
		},function(err){
			if(err){
				$scope.errorMessage = err;
			}
		})
		}	
	}
	$scope.searchresource = function(id,primarySkills,jobCategory,jobLocation,experience) {
		debugger;
		localStorage.setItem('requirementId', id);
		localStorage.setItem('primarySkills1', primarySkills);
		localStorage.setItem('jobCategory1', jobCategory);
		localStorage.setItem('jobLocation1', jobLocation);
		localStorage.setItem('experience1', experience);
		$state.go('customer.resourcesearch');
	}
	
/*	
	$scope.dynamicsearch = function(primarySkills,jobCategory,jobLocation,experience){
		debugger;
		 RAService.searchrequirementbyid(primarySkills,jobCategory,jobLocation,experience).then(function(data){
			 debugger;
			   $scope.list = data;
			   console.log("this is list");
			   console.log($scope.list);
		   })			
	}*/
	 $scope.dynamicsearch = function(primarySkills,jobCategory,jobLocation,experience){
			debugger;
			 RAService.searchrequirement(primarySkills,jobCategory,jobLocation,experience).then(function(data){
				   $scope.list = data.result;
				   console.log($scope.list);
			   })			
		}
	 $scope.search1 = function(search1){
			debugger;
			RAService.searchrequirement(search1.skills,search1.jobCategory,search1.city,search1.totalExperience).then(function(data){
				
				$scope.list = data.result;
				console.log($scope.list);
			})
		}
	 
}])