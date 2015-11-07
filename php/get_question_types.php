<?php
	include 'db_connect.php';
	$types_query = "
		SELECT *
		FROM `types` ";

	$types_result = $DB->query($types_query);
	$types_count = $types_result->num_rows;	
	$type = $types_result->fetch_all(MYSQLI_ASSOC);

	$types = array();
	for ($i = 0; $i < $types_count; $i++) {
		$aux = array(
			"id" => $type[$i]['id'],
			"name" => $type[$i]['name'],
			"description" => $type[$i]['description']
		);
		array_push($types, $aux);
	}
	echo json_encode($types);
?>