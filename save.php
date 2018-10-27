<?php
include "db.php";

$id = $_POST['seatID'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$phoneNumber = $_POST['phoneNumber'];
$status = '1';

$sql = "UPDATE `toms` SET 
                            `firstName`='$firstName',
                            `lastName`='$lastName',
                            `phoneNumber`='$phoneNumber', 
                            `status`='$status'
                    WHERE `id`='$id'";
$result = mysqli_query($conn, $sql);

if($result){
    $conn->close();

     echo $id;
}

?>