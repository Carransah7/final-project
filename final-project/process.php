<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Contact Email
    $to = "your_email@gmail.com";
    
    $subject = "New contact from $name";
    
    $headers = "From: $email" . "\r\n";
    
    mail($to, $subject, $message, $headers);
    
    // Success message.
    echo "Thank you for your message! Click.";
    exit; // terminate the script
} else {
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Method not allowed.";
    exit; // Terminate the script
}
?>
