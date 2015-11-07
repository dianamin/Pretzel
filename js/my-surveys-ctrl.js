app.controller('MySurveysCtrl', function($scope, $http) {
	$scope.surveys = [];


	$scope.getData = function() {
	    $http.get("php/get_my_surveys.php").then(function(response) {
			$scope.surveys = response.data;
		});;
	};

	$scope.getData();
	setInterval(function(){
		$scope.getData();
	}, 3000);
});
