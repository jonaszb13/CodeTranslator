<?php 

$DATABASE_HOST = '10.35.232.77';
$DATABASE_USER = 'k174849_test';
$DATABASE_PASS = 'Test1234.?';
$DATABASE_NAME = 'k174849_test';

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

echo "test";


if (mysqli_connect_errno()) {
	$conerr = "Failed to connect to MySQL: " .mysqlite_connect_error();
	header('Content-Type: application/json');
	echo json_encode($conerr);
	exit();
}


//if (!isset($_POST['username'], $_POST['password'], $_POST['password2'], $_POST['email'])) {
//	$regerr = "Please fill out the registration form";
//	header('Content-Type: application/json');
//	echo json_encode($regerr);
// 	function redirect($url, $statusCode = 303) {
//		header('Location ' . $url, true, $statusCode);
//		die();
//	}
//}


if (filter_var($femail, FILTER_VALIDATE_EMAIL)) {
	echo "Email is not valid123";
	header('Content-Type: application/json');
	exit();
}

if (isset($_GET['email'])) {
	echo "Echo test - ". $_GET['email']. " test ";
} else {
	echo "Echo test - keine Email ";
}

echo "test2.0";

if (empty($_POST['username']) || empty($_POST['password']) || empty($_POST['password2']) || empty($_POST['email'])) {
	exit();
}



if (preg_match('/^[a-zA-Z0-9]+$/', $_POST['username']) == 0) {
	$usrerr = 'Username is not valid123';
	header('Content-Type: application/json');
	echo json_encode($usrerr);
	
	exit();
}

if ($stmt = $con->prepare('SELECT id, password FROM accounts WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	$stmt->store_result();
	// Store the result so we can check if the account exists in the database.
    if ($stmd = $con->prepare('SELECT id, password FROM accounts WHERE email = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), hash the password using the PHP password_hash function.
	$stmd->bind_param('s', $_POST['email']);
	$stmd->execute();
	$stmd->store_result();
	// Store the result so we can check if the account exists in the database.

	if ($stmt->num_rows > 0) {
        $usrexists = 'Username exists, please choose another or login!';
		header('Content-Type: application/json');
		echo json_encode($usrexists);
		
		exit();
	} elseif ($stmd->num_rows > 0) {
		$emailexists = 'Email exists, please choose another or login!';
		header('Content-Type: application/json');
		echo json_encode($emailexists);
		
		exit();
    } 
    else {	
        // Username doesnt exists, insert new account
        if ($stmt = $con->prepare('INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)')) {
	        // We do not want to expose passwords in our database, so hash the password and use password_verify when a user logs in.
	        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
	        $stmt->bind_param('sss', $_POST['username'], $password, $_POST['email']);
	        $stmt->execute();
	        //echo 'You have successfully registered, you can now login!';
        } else {
	    // Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	    //echo 'Could not prepare statement!';
        }
	}
$stmt->close();
$stmd->close();
    }
} else {
	// Something is wrong with the sql statement, check to make sure accounts table exists with all 3 fields.
	//echo 'Could not prepare statement!';
}

echo "account created";

$con->close();
?>

