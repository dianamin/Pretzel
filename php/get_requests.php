<?php
	include 'db_connect.php';
	$requests_query = "
		SELECT *
		FROM requests 
		ORDER BY id DESC";

	$requests_result = $DB->query($requests_query);
	$requests_count = $requests_result->num_rows;	
	$request = $requests_result->fetch_all(MYSQLI_ASSOC);

	$requests = array();
	for ($i = 0; $i < $requests_count; $i++) {
		$user_id = $request[$i]['user_id'];
		$user_name = "";

		$select_query = "SELECT * FROM users WHERE id = '{$user_id}'";
		$select_query_result = @$DB->query($select_query);

		if ($select_query_result->num_rows == 0) {
			$user_name = "User not found.";
		}
		else {
			$selected_user = $select_query_result->fetch_all(MYSQLI_ASSOC);
			$user_name = $selected_user[0]['name'];
		}

		$aux = array(
			"index" => $i + 1,
			"id" => $request[$i]['id'],
			"userId" => $user_id,
			"userName" => $user_name
		);

		array_push($requests, $aux);
	}
	echo json_encode($requests);
?>