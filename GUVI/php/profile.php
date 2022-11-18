<?php
session_start();
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$pname = $_POST['pname'];
$dname = $_POST['dname'];
$lname = $_POST['lname'];
$phname = $_POST['phname'];
$cpname = $_POST['cpname'];
$genname = $_POST['genname'];
if(!isset($_SESSION["mname"]) && !isset($_SESSION["pname"])){
    header("Location:login.php")
}
echo"First Name : " $_SESSION['fname'];
echo"Last name : " $_SESSION['lname'];
echo"Email ID : " $_SESSION['mname'];
echo"Date of Birth : " $_SESSION['dname'];
echo"Phone number : " $_SESSION['phname'];
echo"Gender : " $_SESSION['genname'];
 
if(session_destroy(){
    header("Location:login.php");
})
?>