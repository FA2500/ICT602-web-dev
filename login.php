<?php
$servername = "fdb32.awardspace.net";
$username = "3990693_journalife";
$password = "Qwerty12345!";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>