app.controller('NumbersCtrl', function($scope, $http) {
	app.controller('GeneralSurveysCtrl', function($scope, $http) {
	$scope.latestSurveys = [];


	$scope.getData = function() {
	    $http.get("php/get_surveys.php").then(function(response) {
			$scope.latestSurveys = response.data;
		});
		console.log("checked");
	};

	$scope.getData();
	setInterval(function(){
		$scope.getData();
	}, 3000);
});

});
