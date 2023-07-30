<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $jsonData = file_get_contents('php://input');
    $formData = json_decode($jsonData, true);

    $name = $formData["name"];
    $email = $formData["email"];
    $message = $formData["message"];

    $to = "harendrabaghel369@yahoo.com"; // Replace with your email address
    $subject = "Contact Form Submission";
    $headers = "From: $email";
    $body = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false));
    }
}
?>
