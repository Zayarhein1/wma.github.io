<?php
if(isset($_POST['name1']) && isset( $_POST['email1']) && isset( $_POST['password1']) && isset( $_POST['username']) && isset( $_POST['password2']) )
{
    $conn = new mysqli("localhost", "root", "232209", "mydba");
    $sql = "INSERT INTO leadregister(name,email,password,username,newpassword) values('" .
    $_POST["name1"] . "','" . $_POST["email1"] . "', '" . $_POST["password1"] . "', '" . $_POST["username"] . "', '" . $_POST["password2"] . "')";
    $conn->query($sql);
    $conn->close();
}
?>