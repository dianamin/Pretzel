<?php
	include 'db_connect.php';

	$value = $_POST['value'];

	echo $value;
	
	$insert_text = "INSERT INTO tabel(numar) VALUES ('{$value}')";
	$inserted_query = @$DB->query($insert_text);
?>