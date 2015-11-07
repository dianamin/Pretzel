<?php
	echo "logging out";
	session_start();
	$_SESSION = array();
	session_destroy();
?>	