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

// Get the form data
$username = $_POST["userName"];
$password = $_POST["pwd"];

// Prevent SQL injection
$username = mysqli_real_escape_string($conn, $username);
$password = mysqli_real_escape_string($conn, $password);

// Query the database to verify the credentials
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) == 1) {
    // Successful login
    header('Location: home.html'); // Replace with your welcome page
} else {
    // Failed login
    echo "Invalid username or password.";
}

// Close the connection
mysqli_close($conn);
?>
