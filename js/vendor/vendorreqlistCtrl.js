resourceApp.controller('vendorreqlistCtrl',	['$scope','RAService','$state',function($scope, RAService, $state) {
					$scope.Selectors = [ "jobCategory", "experience",
							"jobLocation" ];
					$scope.SelectedCriteria = "";
					$scope.filterValue = "";

					$scope.$on('$viewContentLoaded', function() {
						$scope.postrequirement = {};
						$scope.postareq();
					})
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
						$scope.skills = [ "Java", "jsp", "Servlets", "Spring",
							"HTML", "CSS", "Bootstrap", "AngularJs", "Nodejs",
							"Php", "Phyton", "MySQL", "MongoDB", "Oracle",
							"SQL Server" ];

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

				} ])
				
resourceApp.controller('vendorreqsummaryCtrl',["$scope","$rootScope","$state","$stateParams","RAService",function($scope,$rootScope,$state,$stateParams,RAService){
    $scope.$on('$viewContentLoaded', function () {
		$scope.postrequirement = {};
       
		 $scope.edit();
        })
		
   
	
		
        $scope.jobcategory = ["Java Developer","UI Developer","IDM Consultant",".Net Developer"];
	    $scope.jobtype = ["Contract","Full-time","Part-time"];
	    $scope.jobRole = ["Fresher","Intern","Trainee","Junior Developer","Senior Developer","Project Lead"];
	    $scope.joblocation= ["Bangalore","Chennai","Hyderabad","Pune","Itanagar","Dispur","Patna","Raipur","Panaji","Gandhinagar","Punjab","Shimla","Srinagar","Ranchi",
        	"Thiruvananthapuram","Bhopal","Mumbai","Imphal","Shillong","Aizawl","Kohima","Bhubaneswar","Jaipur","Gangtok","Noida","Amaravathi","Agartala","Lucknow","Dehradun","Kolkata"];
        $scope.experience = ["1-2 years","2-3 years","3-5 years","5-7 years","7-10 years"];
		$scope.primaryskills = ["Java","JDBC","HTML5","CSS3","Javascript","AngularJS"];
		$scope.Rate=["Hourly","Per-Day","Per-Week","Per-Month",];
		$scope.skills=["Java","jsp","servlets","Spring","HTML","CSS","Bootstrap","AngularJs","Nodejs","Php","Phyton","MySQL","MongoDB","Oracle","SQL Server"];
		$scope.secondaryskills = ["Oracle","MYSQL","SQL Server","MongoDB","WebRTC","Web Socket"];
        $scope.joining = ["Immediate","10-15 days","15-30 days","30-45 days"];
       
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

