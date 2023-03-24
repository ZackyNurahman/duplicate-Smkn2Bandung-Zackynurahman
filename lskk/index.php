<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM users";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO users(id, nama_depan ,nama_belakang, email,option ,pesan) VALUES(null, :nama_depan, :nama_belakang, :email,:option ,:pesan)";
        $stmt = $conn->prepare($sql);
        $created_at = date('y-m-d');
        $stmt->bindParam(':nama_depan', $user->nama_depan);
        $stmt->bindParam(':nama_belakang', $user->nama_belakang);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':option', $user->option);
        $stmt->bindParam(':pesan', $user->pesan);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created succesfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
}   

?>