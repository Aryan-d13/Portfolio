<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "aryanstark3000@gmail.com";

  $subject = "New Contact Form Submission";

  $message = "Name: $name\nEmail: $email\nMessage:\n$message";
  mail($to, $subject, $message);

  header("Location: /contact.php?status=success");
  exit;
}
?>
