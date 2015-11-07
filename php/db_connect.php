<?php
	error_reporting(0);
	
	$host = "localhost";
	$username = "";
	$password = "";
	$dbname = "";
	
	$DB = new MySQLi($host, $username, $password, $dbname); 
	$DB->set_charset("utf8");
	
	session_start();
?>