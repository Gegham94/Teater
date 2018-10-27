<?php
include "db.php";

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