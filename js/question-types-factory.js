app.factory('QuestionTypesFactory', function($http) {
	var url = 'php/get_question_types.php';

	return {
		getQuestionTypes: function() {
			var getJson = $http.get(url);
			return getJson;
		}
	}
});
