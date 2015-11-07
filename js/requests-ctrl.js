app.controller('RequestsCtrl', function($scope, $http) {
	$scope.requests = [];

	$scope.getData = function() {
	    $http.get("php/get_requests.php").then(function(response) {
			$scope.requests = response.data;
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

	$scope.changeStatus = function(userId, request_id) {
		$.ajax({
	        type: "POST",
	        url: "php/level_up_user.php",
	        data: {id: userId, new_status: 1}, 
	        cache: false,

	        success: function(data){
	            console.log(data);

	            $.ajax({
			        type: "POST",
			        url: "php/delete_request.php",
			        data: {id: request_id}, 
			        cache: false,

			        success: function(data){
			            console.log(data);
			        }
			    });
	        }
	    });
	}

	$scope.delete = function(request_id) {
		$.ajax({
	        type: "POST",
	        url: "php/delete_request.php",
	        data: {id: request_id}, 
	        cache: false,

	        success: function(data){
	            console.log(data);
	        }
	    });
	}
});
