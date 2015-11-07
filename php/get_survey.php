<?php
	include 'db_connect.php';

	$id = $_POST['id'];

	$select_surveys = "SElECT * FROM surveys WHERE id = '{$id}'";
	$survey_result = @$DB->query($select_surveys);
	$surveys = $survey_result->fetch_all(MYSQLI_ASSOC);

	
	$survey = array(
		"title" => $surveys[0]['title'],
		"img" => $surveys[0]['img'],
		"description" => $surveys[0]['description'],
		"loginRequired" => $surveys[0]['login_required'],
		"expirationDate" => $surveys[0]['expiration_date'],
		"published" => $surveys[0]['published'],
		"language" => $surveys[0]['language'],
		"category" => $surveys[0]['category']
	);

	echo json_encode($survey);
?>