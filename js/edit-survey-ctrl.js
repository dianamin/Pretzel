app.controller('EditSurveyCtrl', function($scope, $http, $routeParams, CategoriesFactory, LanguagesFactory, QuestionTypesFactory) {
	$scope.categories = [];
	$scope.languages = [];
	$scope.questionTypes = [];

	$scope.surveyId =  $routeParams.surveyId;
	$scope.survey = {};

	$scope.questions = [];
	$scope.questionsCount = 0;


	$scope.boss = true;


	$.ajax({
        type: "POST",
        url: "php/get_survey.php",
        data: {id: $scope.surveyId}, 
        cache: false,

        success: function(data) {
        	$scope.survey = JSON.parse(data);


		    $http.get("php/my_account.php").then(function(response) {
				$scope.user = response.data;
				console.log($scope.user);
				if ($scope.user.id == $scope.survey.user_id)  $scope.boss = true;
			});
        }

    });





	$.ajax({
        type: "POST",
        url: "php/get_questions.php",
        data: {id: $scope.surveyId}, 
        cache: false,

        success: function(data) {
        	$scope.questions = JSON.parse(data);
        	$scope.questionsCount = $scope.questions.length;
        	$scope.$apply();
        }
    });

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
	        url: "php/delete_survey.php",
	        data: {id: $scope.surveyId}, 
	        cache: false,

	        success: function(data){
	            console.log(data);
	        }
	    });

		$.ajax({
	        type: "POST",
	        url: "php/add_survey.php",
	        data: {survey: surveyJSON, questions: questionsJSON}, 
	        cache: false,

	        success: function(data){
	            console.log(data);
	        }
	    });
	}
});
