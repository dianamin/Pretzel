<?php
	include 'db_connect.php';

	$id = $_POST['id'];

	$select_questions = "SElECT * FROM questions WHERE survey_id = '{$id}'";
	$question_result = @$DB->query($select_questions);
	$question = $question_result->fetch_all(MYSQLI_ASSOC);

	$questions = array();

	foreach ($question as $q) {
		$aux = array(
			"id" => $q['id'],
			"text" => $q['text'],
			"qtype" => $q['type'],
			"textAns" => "",
			"starAns" => 0,
			"rangeAns" => 0
		);

		array_push($questions, $aux);
	}

	echo json_encode($questions);
?>