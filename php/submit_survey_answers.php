<?php
	include 'db_connect.php';

	$survey_id = $_POST['survey'];
	$questions = json_decode(stripslashes($_POST['questions']));
	$user_id = $_SESSION['user_id'];

	foreach ($questions as $question) {
		$question->text_ans = $DB->real_escape_string($question->text_ans);
		$insert_question = "INSERT INTO answers(id, question_id, user_id, text_ans, range_ans, star_ans) VALUES(NULL, '{$question->id}', '{$user_id}', '{$question->textAns}', '{$question->rangeAns}', '{$question->starAns}')";
		$inserted_question_query = @$DB->query($insert_question);
	}

	$insert_done_survey = "INSERT INTO done_surveys(survey_id, user_id) VALUES('{$survey_id}', '{$user_id}')";
	$inserted_done_survey = @$DB->query($insert_done_survey);


?>