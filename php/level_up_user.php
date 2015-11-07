<?php
	include 'db_connect.php';

	$level = $_SESSION['user_level'];
	$id = $_POST['id'];
	$status = $_POST['new_status'];

	if ($level > 0) {
		$level_up_query = "UPDATE users SET level = '{$status}' WHERE id = '{$id}'";
		echo $level_up_query;
		$level_up = @$DB->query($level_up_query);
	}
?>