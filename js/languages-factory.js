app.factory('LanguagesFactory', function($http) {
	var url = 'php/get_languages.php';

	return {
		getLanguages: function() {
			var getJson = $http.get(url);
			return getJson;
		}
	}
});
