app.controller('StatisticsCtrl', function($scope, $http, $routeParams) {
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

    $scope.getAnswers = function(i) {
        if (i == -1) return;

        $.ajax({
            type: "POST",
            url: "php/get_question_answers.php",
            data: {id: $scope.questions[i].id}, 
            cache: false,

            success: function(data) {
                var ans = JSON.parse(data);
                $scope.questions[i].answers = ans;
                $scope.getAnswers(i - 1);
                $scope.$apply();
            }
        });    
    }

	$.ajax({
        type: "POST",
        url: "php/get_questions.php",
        data: {id: $scope.surveyId}, 
        cache: false,

        success: function(data) {
        	$scope.questions = JSON.parse(data);
        	$scope.questionsCount = $scope.questions.length;
            $scope.getAnswers($scope.questionsCount - 1);
        }
    });

    $scope.currentQuestion = 0;

    $scope.nextQuestion = function() {
    	if ($scope.currentQuestion != $scope.questionsCount - 1) $scope.currentQuestion++;
    }
    $scope.prevQuestion = function() {
    	if ($scope.currentQuestion != 0) $scope.currentQuestion--;
    }
});
