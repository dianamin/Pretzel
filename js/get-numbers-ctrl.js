app.controller('NumbersCtrl', function($scope, $http) {
	$scope.numbers = [];

	$scope.getData = function() {
	    $http.get("php/get_data.php").then(function(response) {
			$scope.numbers = response.data;
		});
		console.log("checked");
	};

	setInterval(function(){
		$scope.getData();
	}, 3000);

	$scope.addNumber = function() {
		$(function(){
	        $.ajax({
	            type: "POST",
	            url: 'php/add_number.php',
	            data: ({'value': 21}),
	            success: function(data) {
					console.log(data);
	            }
	        });
	    });
	}
});
