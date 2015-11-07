app.controller('NewSurveyCtrl', function($scope, $http, CategoriesFactory, LanguagesFactory) {
	$scope.categories = [];
	$scope.languages = [];

	$scope.survey = {
		title: "",
		desc: "",
		imgUrl: "",
		loginRequired: false,
		expirationDate: "",
		language: 0,
		category: 0
	}

	$scope.getData = function() {
	    CategoriesFactory.getCategories().then(function(response) {
			$scope.categories = response.data;
		});

	    LanguagesFactory.getLanguages().then(function(response) {
			$scope.languages = response.data;
		});
	};
	$scope.getData();
});
