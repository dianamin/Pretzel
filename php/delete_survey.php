<?php
	include 'db_connect.php';

	$id = $_POST['id'];

	$requests_query = "
		DELETE
		FROM surveys
		WHERE id = '{$id}'";

	$requests_result = $DB->query($requests_query);
?>