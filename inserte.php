<?php 
include('dbConnection.php');

$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['id'];
$name = $mydata['name'];
$phone = $mydata['phone'];
$email = $mydata['email'];
$text = $mydata['text'];

if(!empty($name) && !empty($phone) && !empty($email) && !empty($text))
{
    $sql = "INSERT INTO student(id, name , phone , email , text) VALUES ('$id', $name' , '$phone' , '$email' , '$text') ON DUPLICATE KEY UPDATE name='$name', phone='$phone' , email='$email' , text='$text'  ";

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