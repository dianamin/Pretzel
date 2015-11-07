<?php
	include 'db_connect.php';

	$user = array (
		"id" => $_SESSION['user_id'],
		"name" => $_SESSION['user_name'],
		"img" => $_SESSION['user_img'],
		"rating" => $_SESSION['user_rating'],
		"level" => $_SESSION['user_level']
	);

	echo json_encode($user);
?>