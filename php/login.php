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

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();
if ($user && ($password==$user['password'])) {
	echo json_encode(array('status' => 'success','message'=>'successful'));
} else {
	echo json_encode(array('status' => 'error', 'message' =>"Incorrect Email or Password"));
}
$stmt->close();
$conn->close();
?>
