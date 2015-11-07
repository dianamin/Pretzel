app.factory('CategoriesFactory', function($http) {
	var url = 'php/get_categories.php';

	return {
		getCategories: function() {
			var getJson = $http.get(url);
			return getJson;
		}
	}
});
