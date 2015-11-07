<?php
	include 'db_connect.php';

	$survey_id = $_POST['id'];
	$user_id = $_SESSION['user_id'];

	$select_surveys = "SElECT * FROM done_surveys WHERE user_id = '{$user_id}' AND survey_id = '{$survey_id}'";
	$survey_result = @$DB->query($select_surveys);

	if ($survey_result->num_rows == 0)
		echo "No";
	else echo "Yes";
?>