app.controller('NewSurveyCtrl', function($scope, $http, CategoriesFactory, LanguagesFactory, QuestionTypesFactory) {
	$scope.categories = [];
	$scope.languages = [];
	$scope.questionTypes = [];


	$scope.boss = false;

    $http.get("php/my_account.php").then(function(response) {
		$scope.user = response.data;
		console.log($scope.user);
		if ($scope.user.level >= 1)  $scope.boss = true;
	});

	$scope.survey = {
		title: "",
		description: "",
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
	}

	$scope.addSurvey = function() {
		var questionsJSON = JSON.stringify($scope.questions);
		var surveyJSON = JSON.stringify($scope.survey);

		$.ajax({
	        type: "POST",
	        url: "php/add_survey.php",
	        data: {survey: surveyJSON, questions: questionsJSON}, 
	        cache: false,

	        success: function(data){
	            alert("OK");
	            console.log(data);
	        }
	    });
	}
});
