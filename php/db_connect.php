<?php
	error_reporting(0);
	
	$host = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "pretzel";
	
	$DB = new MySQLi($host, $username, $password, $dbname); 
	$DB->set_charset("utf8");
	
	session_start();
	if (!isset($_SESSION['user_id'])) $_SESSION['user_id'] = 0;
?>

