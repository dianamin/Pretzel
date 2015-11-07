<?php
	include 'db_connect.php';


	$survey = json_decode(stripslashes($_POST['survey']));
	$questions = json_decode(stripslashes($_POST['questions']));
	
	$survey->title = $DB->real_escape_string($survey->title);
	$survey->description = $DB->real_escape_string($survey->description);
	$survey->imgUrl = $DB->real_escape_string($survey->imgUrl);
	


	$insert_survey = "INSERT INTO surveys(id, user_id, img, title, description, login_required, expiration_date, published, language) VALUES ('NULL', 0, '{$survey->imgUrl}', '{$survey->title}', '{$survey->description}', '{$survey->loginRequired}', '{$survey->expirationDate}', '{$survey->language}', '{$survey->category}')";
	$inserted_query = @$DB->query($insert_survey);

	$select_surveys = "SElECT * FROM surveys ORDER BY id DESC";
	$select_surveys_result = @$DB->query($select_surveys);
	$surveys_ids = $select_surveys_result->fetch_all(MYSQLI_ASSOC);

	$aux = $surveys_ids[0]['id'];


	foreach ($questions as $question) {
		$question->text = $DB->real_escape_string($question->text);
		$insert_question = "INSERT INTO questions(id, survey_id, text, type) VALUES('NULL', '{$aux}', '{$question->text}', '{$question->type}')";
		echo $insert_question;
		$inserted_question_query = @$DB->query($insert_question);
	}
	
	/*$insert_text = "INSERT INTO tabel(numar) VALUES ('{$value}')";
	$inserted_query = @$DB->query($insert_text);*/
?>