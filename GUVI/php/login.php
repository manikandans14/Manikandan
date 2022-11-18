<?php

$mail = $_POST['mail'];
$pass = $_POST['pass'];

if(!empty($mail) || !empty($pass))
{
    $host="localhost";
    $dbusername="root";
    $dbpassword="";
    $dnname="project";
    
    
    $conn = new mysqli ($host,$dbusername, $dbpassword,$dnname);

    if(mysqli_connect_error()){
        die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
    }
    else{
        $INSERT = "INSERT Into login(mail,pass) values(?,?)";
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ss",$mail,$pass);
        $stmt->execute();
        $stmt->close();

    }
}
else
{
  echo "All field are required";
  die();
 }

?>