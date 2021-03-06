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

	$scope.user = {};
	$scope.admin = false;

    $http.get("php/my_account.php").then(function(response) {
		$scope.user = response.data;
		console.log($scope.user);
		if ($scope.user.level == 2)  $scope.admin = true;
	});

	$scope.changeStatus = function(userId, status) {
		status = 1 - status;
		$.ajax({
	        type: "POST",
	        url: "php/level_up_user.php",
	        data: {id: userId, new_status: status}, 
	        cache: false,

	        success: function(data){
	            console.log(data);
	        }
	    });
	}
});
