<?php
 include 'config.php';
 if (isset($_POST['txtname']) && isset($_POST['txtpass']) && isset($_POST['status'])) {
    $username=$_POST['txtname'];
    $password=$_POST['txtpass'];
    $status=$_POST['status'];
    $sqli="SELECT * FROM member WHERE username='$username'";
    $mysql=mysqli_query($connect,$sqli);
    if($num=mysqli_fetch_array($mysql)>0){
        echo "<script type='text/javascript'>";
        echo "alert('มีผู้ใช้ ID นี้แล้วครับ');";
        header("Refresh:0; url=register.php");
        echo "</script>";
    }else{
$insert="INSERT INTO member(idname,username,password,status)VALUES('','$username','$password','$status')";
$queryinsert=mysqli_query($connect,$insert);

        echo "<script type='text/javascript'>";
        echo "alert('สมัครเสร็จสมบูรณ์');";
        header("Refresh:0; url=register.php");
        echo "</script>";
    }
 }
?>