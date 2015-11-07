app.controller('TakeSurveyCtrl', function($scope, $http, $routeParams) {
	$scope.surveyId =  $routeParams.surveyId;
	$scope.survey = {};

	$scope.questions = [];
	$scope.questionsCount = 0;

	$.ajax({
        type: "POST",
        url: "php/get_survey.php",
        data: {id: $scope.surveyId}, 
        cache: false,

        success: function(data) {
        	$scope.survey = JSON.parse(data);
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
        }
    });

    $scope.currentQuestion = 0;

    $scope.nextQuestion = function() {
    	if ($scope.currentQuestion != $scope.questionsCount - 1) $scope.currentQuestion++;
    }
    $scope.prevQuestion = function() {
    	if ($scope.currentQuestion != 0) $scope.currentQuestion--;
    }

    $scope.submitSurvey = function() {
    	var questionsJSON = JSON.stringify($scope.questions);

        $.ajax({
            type: "POST",
            url: "php/submit_survey_answers.php",
            data: {questions: questionsJSON}, 
            cache: false,

            success: function(data){
                console.log(data);
            }
        });
    }
});
