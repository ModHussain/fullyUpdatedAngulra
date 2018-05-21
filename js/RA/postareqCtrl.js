resourceApp.controller('postareqCtrl',['$scope','RAService',function($scope,RAService){
	$scope.Selectors =["jobCategory","experience","jobLocation"];
    $scope.SelectedCriteria = ""; 
    $scope.filterValue = "";
    
    
	$scope.$on('$viewContentLoaded', function () {
		$scope.postrequirement = {};
		$scope.postareq();
	})
	
	$scope.postareq = function(){
		debugger;
		RAService.postareqList().then(function(data) {
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
        RAService.postReqfilter(filter).then(function(data){
           $scope.list = data.result;
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
	
	
	
	$scope.Selectors = [ "jobCategory", "experience",
							"jobLocation" ];
					$scope.SelectedCriteria = "";
					$scope.filterValue = "";

					$scope.$on('$viewContentLoaded', function() {
						$scope.postrequirement = {};
						$scope.postareq();
					})
					$scope.skillfunc= function(){
						RAService.getskills().then(function(data){
					        $scope.skills = data.result;
					       
					    });
						}
						$scope.companyfunc= function(){
							RAService.getcompany().then(function(data){
						        $scope.company = data.result;
						       
						    });
							}
						$scope.budgetfunc= function(){
							RAService.getbudget().then(function(data){
						        $scope.budget = data.result;
						       
						    });
							}
						$scope.experiencefunc=function(){
						RAService.getexperience().then(function(data){
						$scope.experience =data.result;
						console.log($scope.experience);
						})
						}
						$scope.locationfunc = function(){
						RAService.getlocation().then(function(data){
							$scope.location = data.result;
						})
						}
						$scope.jobcategoryfunc = function(){
						RAService.getjobCategory().then(function(data){
							$scope.Jobc = data.result;
						})
						}
						$scope.dynamicsearch = function(primarySkills,jobCategory,jobLocation,experience){
							debugger;
							 RAService.searchrequirement(primarySkills,jobCategory,jobLocation,experience).then(function(data){
								   $scope.list = data.result;
								   console.log($scope.list);
							   })			
						}
					/*$scope.States = [ "Hyderabad", "Vijayawada", "Vizag",
							"Bangalore", "Chennai", "Madurai", "Kolkata",
							"Pune", "Mumbai", "Noida", "Delhi", "Jaipur",
							"Darjeeling", "Kerala" ];

					$scope.Jobc = [ "Application Developer",
							"Applications Engineer", "Database Administrator",
							"Front End Developer", "Java Developer",
							"Junior Software Engineer", "Network Engineer",

							"Senior Database Administrator",
							"Senior Programmer", "Senior Security Specialist",
							"Senior Web Developer", "Software Architect",
							"Systems Designer", "Software Developer",
							"Web Administrator", "Web Developer" ];
					$scope.skills = [ "java", "jsp", "servlets", "Spring",
							"Html", "Css", "Bootstrap", "Angularjs", "Nodejs",
							"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
							"Sql Server" ];
					$scope.experience = [ "0-1 years", "1-2 years",
							"2-3 years", "3-4 years", "4-5 years", "5-6 years",
							"more" ];
					$scope.company = [ "TCS", "Tech M", "Oracle", "IBM",
							"Ojas", "HCL", "Wipro", "Info-tech", "CapGemini",
							"Persistant", "Virtusa", "Infosys" ]*/
						$scope.skills = [ "java", "jsp", "servlets", "Spring",
							"Html", "Css", "Bootstrap", "Angularjs", "Nodejs",
							"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
							"Sql Server" ];

					$scope.postareq = function() {
						debugger;
						RAService.postareqList().then(function(data) {
							$scope.list = data.result;
							console.log($scope.list);
						}, function(err) {
							if (err) {
								$scope.errorMessage = err;
							}
						})
					}
					$scope.postFilter = function() {
						// debugger;
						var filter = {
							jobCategory : $scope.SelectedCriteria,
							consultant : $scope.filterValue
						};
						RAService.postReqfilter(filter).then(
								function(response) {
									$scope.list = response.result.data;
									console.log($scope.list);
								}, function(err) {
									if (err) {
										$scope.errorMessage = err;
									}
								})
					}

					$scope.resourcesearch = function(_id,skills,jobCategory,jobLocation,totalExperience) {
						debugger;
						localStorage.setItem('requirementId', _id);
						localStorage.setItem('skills', skills);
						localStorage.setItem('jobCategory', jobCategory);
						localStorage.setItem('jobLocation', jobLocation);
						localStorage.setItem('totalExperience', totalExperience);
						$state.go('vendor.resourcecategory');
					}
					
					
					$scope.search1 = function(search1){
						debugger;
						RAService.searchrequirement(search1.skills,search1.jobCategory,search1.city,search1.totalExperience).then(function(data){
							
							$scope.list = data.result;
							console.log($scope.list);
						})
					}

					$scope.requirement = function(postrequirement) {

						if (postrequirement.status == "Active") {
							postrequirement.status = "Inactive";
							RAService.requirementStatus(postrequirement).then(
									function(data) {
										$scope.aaaa = data.result;
										console.log($scope.aaaa);
									}, function(err) {
										if (err) {
											$scope.errorMessage = err;
										}
									})
						} else {
							postrequirement.status = "Active";
							RAService.requirementStatus(postrequirement).then(
									function(data) {
										$scope.aaaa = data.result;
										console.log($scope.aaaa);
									}, function(err) {
										if (err) {
											$scope.errorMessage = err;
										}
									})
						}
					}

				
	
}])