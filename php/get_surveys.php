<?php
	include 'db_connect.php';
	$surveys_query = "
		SELECT *
		FROM `surveys` 
		ORDER BY id DESC";

	$surveys_result = $DB->query($surveys_query);
	$surveys_count = $surveys_result->num_rows;	
	$survey = $surveys_result->fetch_all(MYSQLI_ASSOC);

	$surveys = array();
	for ($i = 0; $i < $surveys_count; $i++) {
		$aux = array(
			"id" => $survey[$i]['id'],
			"user_id" => $survey[$i]['user_id'],
			"img" => $survey[$i]['img'],
			"title" => $survey[$i]['title'],
			"description" => $survey[$i]['description'],
			"loginRequired" => $survey[$i]['login_required'],
			"expirationDate" => $survey[$i]['expiration_date'],
			"published" => $survey[$i]['published'],
			"language" => $survey[$i]['language'],
			"category" => $survey[$i]['category']
		);
		array_push($surveys, $aux);
	}
	echo json_encode($surveys);
?>