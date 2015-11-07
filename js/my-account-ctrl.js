app.controller('MyAccountCtrl', function($scope, $http) {
	$scope.user = {
		name: "",
		img: "",
		rating: "",
		level: ""
	}

	$scope.asked = false;

	$scope.getAccount = function() {
		$http.get("php/my_account.php").then(function(response) {
			$scope.user = response.data;
			console.log($scope.user);
		});
	};

	$scope.logOut = function() {
		$.ajax({
	        type: "POST",
	        url: "php/log_out.php",
	        data: {}, 
	        cache: false,

	        success: function(data){
	        	location.reload();
	        }
	    });
	}
	$scope.getAccount();

	$scope.requestBossRights = function() {
		$.ajax({
	        type: "POST",
	        url: "php/insert_request.php",
	        data: {}, 
	        cache: false,

	        success: function(data){
	        	$scope.asked = true;
	        	console.log(data);
	       	}
	    });
	}
});
