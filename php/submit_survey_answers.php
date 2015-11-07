<?php
	include 'db_connect.php';


	$questions = json_decode(stripslashes($_POST['questions']));

	foreach ($questions as $question) {
		$question->text_ans = $DB->real_escape_string($question->text_ans);
		$insert_question = "INSERT INTO answers(id, question_id, text_ans, range_ans, star_ans) VALUES('NULL', '{$question->id}', '{$question->textAns}', '{$question->rangeAns}', '{$question->starAns}')";
		$inserted_question_query = @$DB->query($insert_question);
	}
?>