<?php
include "db.php";

$sql = "UPDATE `toms` SET 
                            `firstName`=NULL,
                            `lastName`=NULL,
                            `phoneNumber`=NULL, 
                            `status`= 0
                        WHERE `id`<25";
$result = mysqli_query($conn, $sql);

$sql = "SELECT * FROM `toms`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
echo json_encode($data);
} 
$conn->close();

?>