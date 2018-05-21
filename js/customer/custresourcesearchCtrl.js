resourceApp.controller('customerresourceserchCtrl',['$scope','RAService','$state',function($scope,RAService,$state){
	  	 debugger;

	    var skills =   localStorage.getItem('primarySkills1');
	    var jobCategory = 	localStorage.getItem('jobCategory1');
	    var jobLocation = 	localStorage.getItem('jobLocation1');
	    var yearsOfExperience = 	localStorage.getItem('experience1');
	 	RAService.searchresource(skills,jobCategory,jobLocation,yearsOfExperience).then(function(data){
	 		$scope.resourcelist = data.result;
	 		console.log($scope.resourcelist)	
	 	})
	 	$scope.skills=["java","jsp","servlets","Spring","Html","Css","Bootstrap","Angularjs","Nodejs","Php","Phyton","MySQL","MongoDB","Oracle","Sql Server"];
	 	$scope.allListsfunc= function(){
			debugger;
	 		RAService.allresLists().then(function(data){
	 	        $scope.skillslist = data.primarySkillset;
	 	        console.log($scope.list);
	 	       
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
	 	
 	
	 $scope.requestResource = function(_id,vendorId){
	 	var requirementId =   localStorage.getItem('requirementId');
	 	var registrationId =   localStorage.getItem('registrationId');
	 	debugger;
	 	RAService.requestResourcevendor(requirementId,_id,registrationId,vendorId).then(function(data){
		 		//$scope.resourcelist = data;
		 		console.log(data)
		 		alert("success");
		 	})	
	 	}
	 
	 
	 
//	 	RAService.searchsidefilterresource(skills,jobCategory,jobLocation,experience,vendors,budget).then(function(data){
//	 		debugger;
//	 		$scope.resourcelist = data.result;
//	 		console.log($scope.resourcelist)	
//	 	})
	 	
}]);
resourceApp.controller('customergetresourceCtrl',["$scope","$state","$stateParams","$filter","RAService",function($scope, $state, $stateParams, $filter,RAService) {
	$scope.$on('$viewContentLoaded', function() {
		$scope.resource = {};
		
		$scope.getResourceById();
	})
	

	$scope.gender = [ "Male", "Female", "others" ];
	$scope.experience = [ "1-2 years", "2-4 years","4-6 years", "6-8 years", "8-10 years","10+ more..." ];
	$scope.currentLocation = [ "Bangalore","Chennai","Hyderabad","Pune","Itanagar","Dispur","Patna","Raipur","Panaji","Gandhinagar","Punjab","Shimla","Srinagar","Ranchi",
    	"Thiruvananthapuram","Bhopal","Mumbai","Imphal","Shillong","Aizawl","Kohima","Bhubaneswar","Jaipur","Gangtok","Noida","Amaravathi","Agartala","Lucknow","Dehradun","Kolkata" ];
							
							$scope.preferredLocation = [ "Bangalore","Chennai","Hyderabad","Pune","Itanagar","Dispur","Patna","Raipur","Panaji","Gandhinagar","Punjab","Shimla","Srinagar","Ranchi",
						   "Thiruvananthapuram","Bhopal","Mumbai","Imphal","Shillong","Aizawl","Kohima","Bhubaneswar","Jaipur","Gangtok","Noida","Amaravathi","Agartala","Lucknow","Dehradun","Kolkata" ];
	
							$scope.States=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Goa","Gujarat","Haryana",
								"Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
								"Orissa","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttaranchal","Uttar Pradesh","West Bengal"];
							
							$scope.Countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", 
								"Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil",
								"British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", 
								"Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", 
								"Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
								"East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
								"Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia",
								"Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", 
								"Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia",
								"Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", 
								"Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
								"Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
								"Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", 
								"St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga",
								"Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine",
								"United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela",
								"Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
							
							$scope.Rate=["Hourly","Per-Day","Per-Week","Per-Month"];
							$scope.skills=["java","jsp","servlets","Spring","Html","Css","Bootstrap","Angularjs","Nodejs","Php","Phyton","MySQL","MongoDB","Oracle","Sql Server"];
	$scope.avaliability = [ "10-20 days", "20-30 days","30-45 days", "45-60 days" ];
	$scope.getResourceById = function() {
			RAService.resourcegetById($stateParams.resourceId).then(function(data) {
							$scope.resource = data.result;
							
							$scope.resource.dateOfBirth = new Date(
							$scope.resource.dateOfBirth);
							console.log($scope.resouce);
					},
						function(err) {
							if (err) {
								$scope.errorMessage = err;
							}
						})
	}



} ]);
