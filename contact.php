<?php
	// needs improving only sends to one email, should send to both of us
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $headers = "From: webmaster@example.com" . "\r\n" .
"CC: somebodyelse@example.com";
    $to = 'spetkevicius1@sheffield.ac.uk'; 
    $toManas = 'mmsarpatwar1@sheffield.ac.uk'; 
    $subject = 'Hello';

    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
    	if (mail ($to, $subject, $body, $headers)) { 
        	echo '<p>Your message has been sent!</p>';
    	} else { 
        	echo '<p>Something went wrong, go back and try again!</p>'; 
    	}
	}
?>