<?php
include "db.php";

$bus_no = $_POST['bus_no'];
$source = $_POST['source'];
$destination = $_POST['destination'];
$departure = $_POST['departure'];
$arrival = $_POST['arrival'];

$sql = "INSERT INTO timetable (bus_no, source, destination, departure, arrival)
        VALUES ('$bus_no', '$source', '$destination', '$departure', '$arrival')";

if ($conn->query($sql)) {
    echo "Schedule Saved Successfully!";
} else {
    echo "Error: " . $conn->error;
}
?>
