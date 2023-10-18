<?php 

include('dbConnection.php');
$data = stripslashes(file_get_contents("php://input"));
$mydata = json_decode($data, true);
$id = $mydata['sid'];

//Deleting Student
if(!empty($id))
{
    $sql = "DELETE FROM student WHERE id = {$id}";
    if($conn->query($sql) == TRUE )
    {
        echo "Student Deleted Successfully";
    }
    else
    {
        echo "Unable to delete Student";
    }
}






?>