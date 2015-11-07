<?php
	include 'db_connect.php';


	$user = json_decode(stripslashes($_POST['user']));
	
	$user->name = $DB->real_escape_string($user->name);
	$user->password = $DB->real_escape_string($user->password);
	
	$select_query = "SELECT * FROM users WHERE name = '{$user->name}'";
	$select_query_result = @$DB->query($select_query);

	if ($select_query_result->num_rows == 0) {
		echo "User not found.";
	}
	else {
		$selected_user = $select_query_result->fetch_all(MYSQLI_ASSOC);
		if ($selected_user[0]['password'] != $user->password) {
			echo "Wrong password.";
		}
		else {
			$_SESSION['user_id'] = $selected_user[0]['id'];
		}
	}
?>