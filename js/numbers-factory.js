app.factory('NumbersFactory', function($http) {
	var url = 'php/get_data.php';

	return {
		getNumbers: function() {
			var getJson = $http.get(url);
			return getJson;
		}
	}
});
