<?php 
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
// $id = $mydata['id'];
$name = $mydata['name'];
$phone = $mydata['phone'];
$email = $mydata['email'];
$text = $mydata['text'];

if(!empty($name) && !empty($phone) && !empty($email) && !empty($text))
{
    $sql = "INSERT INTO student(name , phone , email , text) VALUES ('$name' , '$phone' , '$email' , '$text')";

    if($conn->query($sql)=== TRUE)
    {
        echo "Student Saved Successfully";
        
    }
    else{
        echo "Unable to Save Submit" .$sql . "<br>" .$conn->error;
    }
}
else {
    echo "Fill All Field";
}




?>