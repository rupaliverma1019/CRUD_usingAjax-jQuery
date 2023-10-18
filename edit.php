<?php
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);

$id = $mydata['sid'];

$sql = "SELECT * FROM student where id = {$id}";
$result = $conn->query($sql);
$row = $result->fetch_assoc();

// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Return the data as a JSON-encoded string
echo json_encode($row);
?>
