<?php
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);

$id = $mydata['id'];
$name = $mydata['name'];
$phone = $mydata['phone'];
$email = $mydata['email'];
$text = $mydata['text'];

if (!empty($id) && !empty($name) && !empty($phone) && !empty($email) && !empty($text)) {
    $sql = "UPDATE student SET name = '$name', phone = '$phone', email = '$email', text = '$text' WHERE id = '$id'";

    if ($conn->query($sql) === TRUE) {
        echo "Data updated successfully";
    } else {
        echo "Unable to update data: " . $conn->error;
    }
} else {
    echo "Fill All Fields";
}
?>
