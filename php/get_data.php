<?php
	include 'db_connect.php';
	$numbers_query = "
		SELECT *
		FROM `tabel` ";

	$numbers_result = $DB->query($numbers_query);
	$numbers_count = $numbers_result->num_rows;	
	$number = $numbers_result->fetch_all(MYSQLI_ASSOC);

	$numbers = array();
	for ($i = 0; $i < $numbers_count; $i++) {
		$aux = array(
			"index" => $i,
			"value" => $number[$i]['numar']
		);
		array_push($numbers, $aux);
	}
	echo json_encode($numbers);
?>