<?php
    include '../db/db_config.php';
    $cat= $_POST['category'];
    $sql = "INSERT INTO categories(cat_name) VALUES ('$cat')";
    $query = mysqli_query($con,$sql);
    if(!$query){
        echo "Something Went Wrong";
    }
    else{
        echo "Your Data Has Been Inserted Successfully";
    }
    
?>