app.controller('TakeSurveyCtrl', function($scope, $http, $routeParams) {
	$scope.surveyId =  $routeParams.surveyId;
	$scope.survey = {};

	$scope.questions = [];
	$scope.questionsCount = 0;
    $scope.done = false;


    $.ajax({
        type: "POST",
        url: "php/is_survey_done.php",
        data: {id: $scope.surveyId}, 
        cache: false,

        success: function(data) {
            data = parseInt(data);
            console.log(data);
            if (data != 0) $scope.done = true;
            else $scope.done = false;


            $scope.$apply();
        }
    });

	$.ajax({
        type: "POST",
        url: "php/get_survey.php",
        data: {id: $scope.surveyId}, 
        cache: false,

        success: function(data) {
        	$scope.survey = JSON.parse(data);

            if ($scope.survey.loginRequired == 1) {
                $http.get("php/my_account.php").then(function(response) {
                    $scope.user = response.data;
                    if ($scope.user.id == 0)  window.location.href = "#/login";
                });
            }
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
            data: {survey: $scope.surveyId, questions: questionsJSON}, 
            cache: false,

            success: function(data){
                done = true;
            }
        });
    }
});
