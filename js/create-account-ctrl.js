app.controller('CreateAccountCtrl', function($scope, $http) {
	$scope.user = {
		name: "",
		password: "",
		password2: "",
		img: ""
	}

	$scope.registered = false;
	$scope.errors = "";

	$scope.createAccount = function() {
		//daca totul e okay
		var userJSON = JSON.stringify($scope.user);

		$.ajax({
	        type: "POST",
	        url: "php/create_account.php",
	        data: {user: userJSON}, 
	        cache: false,

	        success: function(data){
	            $scope.errors = data;
	        	if ($scope.errors != "Username is already taken.")
	        		$scope.registered = true;
	        	$scope.$apply();
	        }
	    });
	}
});
