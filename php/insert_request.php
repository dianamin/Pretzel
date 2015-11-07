<?php
	include 'db_connect.php';

	$user_id = $_SESSION['user_id'];
	echo $user_id;
	
	$insert_text = "INSERT INTO requests(id, user_id) VALUES ('NULL', '{$user_id}')";
	$inserted_query = @$DB->query($insert_text);
?>