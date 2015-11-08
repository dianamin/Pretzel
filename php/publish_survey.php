<?php
	include 'db_connect.php';

	$id = $_POST['id'];

	$publish_query = "
		UPDATE surveys
		SET published = 1
		WHERE id = '{$id}'";

	$publish_result = $DB->query($publish_query);
?>