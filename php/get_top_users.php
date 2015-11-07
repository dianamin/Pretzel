<?php
	include 'db_connect.php';
	$users_query = "
		SELECT *
		FROM users 
		ORDER BY rating DESC";

	$users_result = $DB->query($users_query);
	$users_count = $users_result->num_rows;	
	$user = $users_result->fetch_all(MYSQLI_ASSOC);

	$users = array();
	for ($i = 0; $i < $users_count; $i++) {
		$aux = array(
			"id" => $user[$i]['id'],
			"index" => $i + 1,
			"img" => $user[$i]['img'],
			"name" => $user[$i]['name'],
			"rating" => $user[$i]['rating'],
			"level" => $user[$i]['level']
		);
		array_push($users, $aux);
	}
	echo json_encode($users);
?>