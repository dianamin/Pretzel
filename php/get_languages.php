<?php
	include 'db_connect.php';
	$languages_query = "
		SELECT *
		FROM `languages` ";

	$languages_result = $DB->query($languages_query);
	$languages_count = $languages_result->num_rows;	
	$language = $languages_result->fetch_all(MYSQLI_ASSOC);

	$languages = array();
	for ($i = 0; $i < $languages_count; $i++) {
		$aux = array(
			"id" => $language[$i]['id'],
			"name" => $language[$i]['name']
		);
		array_push($languages, $aux);
	}
	echo json_encode($languages);
?>