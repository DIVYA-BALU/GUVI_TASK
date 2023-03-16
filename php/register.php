<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registration";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare statement for inserting data into database
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");

// Bind parameters to prepared statement
$stmt->bind_param("sss", $username, $email, $password);

// Get data from AJAX request
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
// $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // hash password for security
// $password= sha1($password);
// Execute statement and return response to AJAX request
if ($stmt->execute()) {
    $response = array(
        'status' => 'success',
        'message' => 'Registration successful',
        'token' => bin2hex(random_bytes(32)) // generate random token for authentication
    );
    echo json_encode($response);
} else {
    $response = array(
        'status' => 'error',
        'message' => 'Registration failed: ' . $conn->error
    );
    echo json_encode($response);
}

// Close connection and statement
$stmt->close();
$conn->close();
?>