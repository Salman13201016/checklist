<?php 

    $id = $_POST['id'];
    include '../db/db_config.php';
    $sql = "DELETE FROM categories where id='$id'";
    $query = mysqli_query($con,$sql);
    if($query){
        echo "The data has been deleted successfully";
    }
    else{
        echo "something went wrong";
    }
?>