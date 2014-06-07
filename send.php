<?php
$name = "Email From ";
$name .= $_POST['name'];
$email = $_POST['email'];
$message = "Reply To: $email \r\n\n\n";
$message .= $_POST['message'];

//Validate first
if(empty($name)||empty($email)) 
{
    echo "Name and email are required !";
    header('Location: index.html');
}

if(IsInjected($email))
{
    echo "Bad email value!";
    header('Location: second.html');
}

$from = 'miles@itensor.org';// change the email address
    
$to = "miles.stoudenmire@gmail.com";// change the email address
$headers = "From: $from \r\n";
$headers .= "Reply-To: $email \r\n";
//Send the email!

//mail($to,$name,$email,$message,$headers);
mail($to,$name,$message,$headers);

//done. redirect to the index page
header('Location: index.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 
