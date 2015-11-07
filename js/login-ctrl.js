app.controller('EnterAccountCtrl', function($scope, $http) {
	$scope.user = {
		name: "",
		password: ""
	}

	$scope.loggedIn = false;
	$scope.errors = "";

	$scope.enterAccount = function() {
		//daca totul e okay
		var userJSON = JSON.stringify($scope.user);

		$.ajax({
	        type: "POST",
	        url: "php/enter_account.php",
	        data: {user: userJSON}, 
	        cache: false,

	        success: function(data){
	            $scope.errors = data;
	            console.log(data);
	        	if ($scope.errors == "")
	        		$scope.loggedIn = true;
	        	$scope.$apply();
	        }
	    });
	}
});
