<?php
$servername = "localhost";
$database = "quick_pass";
$username = "root";
$password = "";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$fullname = $_POST["fullName"];
$username = $_POST["userName"];
$password = $_POST["pwd"];
$start = $_POST["startingPoint"];
$endpoint = $_POST["endingPoint"];

// Insert data
$sql = "INSERT INTO users (full_name,username,password,starting_point,ending_point)
VALUES ('$fullname','$username','$password','$start','$endpoint');";

if (mysqli_query($conn, $sql)) {
    header('Location:log in page.html');
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);
?>