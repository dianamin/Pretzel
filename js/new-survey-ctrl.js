app.controller('NewSurveyCtrl', function($scope, $http, CategoriesFactory, LanguagesFactory, QuestionTypesFactory) {
	$scope.categories = [];
	$scope.languages = [];
	$scope.questionTypes = [];

	$scope.survey = {
		title: "",
		desc: "",
		imgUrl: "",
		loginRequired: false,
		expirationDate: "",
		language: 0,
		category: 0
	}

	$scope.questions = [];

	$scope.getData = function() {
	    CategoriesFactory.getCategories().then(function(response) {
			$scope.categories = response.data;
		});

	    LanguagesFactory.getLanguages().then(function(response) {
			$scope.languages = response.data;
		});

		QuestionTypesFactory.getQuestionTypes().then(function(response) {
			$scope.questionTypes = response.data;
			console.log($scope.questionTypes);
		});
	};
	$scope.getData();

	$scope.addQuestion = function() {
		q = {
			text: "",
			type: 0,
			answers: []
		}
		$scope.questions.push(q);
		$scope.apply();
	}
});
