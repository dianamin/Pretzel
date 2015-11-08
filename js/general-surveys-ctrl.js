app.controller('GeneralSurveysCtrl', function($scope, $http) {
	$scope.latestSurveys = [];

	$scope.recommendedSurveys = [];


	$scope.getData = function() {
	    $http.get("php/get_surveys.php").then(function(response) {
			$scope.latestSurveys = response.data;

			$scope.recommendedSurveys = [$scope.latestSurveys[0], $scope.latestSurveys[2], $scope.latestSurveys[5]];
		});
		console.log("checked");
	};

	$scope.getData();
	setInterval(function(){
		$scope.getData();
	}, 3000);

});
