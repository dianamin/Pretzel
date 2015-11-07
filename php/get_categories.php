<?php
	include 'db_connect.php';
	$categories_query = "
		SELECT *
		FROM `categories` ";

	$categories_result = $DB->query($categories_query);
	$categories_count = $categories_result->num_rows;	
	$category = $categories_result->fetch_all(MYSQLI_ASSOC);

	$categories = array();
	for ($i = 0; $i < $categories_count; $i++) {
		$aux = array(
			"id" => $category[$i]['id'],
			"name" => $category[$i]['name']
		);
		array_push($categories, $aux);
	}
	echo json_encode($categories);
?>