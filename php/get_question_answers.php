<?php
	include 'db_connect.php';
	$question_id = $_POST['id'];

	$select_answers = "SElECT * FROM answers WHERE question_id = '{$question_id}'";
	$question_result = @$DB->query($select_answers);
	$result = $question_result->fetch_all(MYSQLI_ASSOC);

	$answers = array();

	foreach ($result as $r) {
		$aux = array(
			"id" => $r['id'],
			"textAns" => $r['text_ans'],
			"starAns" => $r['star_ans'],
			"rangeAns" => $r['range_ans']
		);

		array_push($answers, $aux);
	}

	echo json_encode($answers);
?>