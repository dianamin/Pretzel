<?php
	include 'db_connect.php';


	$user = json_decode(stripslashes($_POST['user']));
	
	$user->name = $DB->real_escape_string($user->name);
	$user->img = $DB->real_escape_string($user->img);
	$user->password = $DB->real_escape_string($user->password);
	
	$select_query = "SELECT * FROM users WHERE name = '{$user->name}'";
	$select_query_result = @$DB->query($select_query);

	if ($select_query_result->num_rows == 0) {
		$insert_user = "INSERT INTO users(id, name, password, img, rating, level) VALUES ('NULL', '{$user->name}', '{$user->password}', '{$user->img}', 0, 0)";
		$inserted_query = @$DB->query($insert_user);
	}
	else {
		echo "Username is already taken.";
	}
?>