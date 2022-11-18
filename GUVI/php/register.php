<?php

$fname = $_POST['fname'];
$mname = $_POST['mname'];
$pname = $_POST['pname'];
$dname = $_POST['dname'];
$lname = $_POST['lname'];
$phname = $_POST['phname'];
$cpname = $_POST['cpname'];
$genname = $_POST['genname'];

if(!empty($fname) || !empty($mname) || !empty($pname) || !empty($dname) || !empty($lname) || !empty($phname) || !empty($cpname) || !empty($genname))
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
        $SELECT = "SELECT mname from register Where mname =? Limit 1";
        $INSERT = "INSERT Into register(fname,mname,pname,dname,lname,phname,cpname,genname)values(?,?,?,?,?,?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s",$mname);
        $stmt->execute();
        $stmt->bind_result($mname);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssssssss",$fname,$mname,$pname,$dname,$lname,$phname,$cpname,$genname);
            $stmt->execute();
            echo "New record inserted successfully";
            header("Location:login.php");
        }
        else{
            echo "Someone already register usins this email";
        }
        $stmt->close();
        $conn->close();
        }

    }
    else{
        echo "All field are required";
        die();
    }
 ?>




