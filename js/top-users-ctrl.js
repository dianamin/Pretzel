app.controller('TopUsersCtrl', function($scope, $http) {
	$scope.users = [];

	$scope.getData = function() {
	    $http.get("php/get_top_users.php").then(function(response) {
			$scope.users = response.data;
		});
	}


	$scope.getData();
	setInterval(function(){
		$scope.getData();
	}, 3000);
});
