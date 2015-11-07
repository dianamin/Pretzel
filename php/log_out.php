<?php
	include 'db_connect.php';

	echo "logging out";
	$_SESSION = array();
	session_destroy();
?>	