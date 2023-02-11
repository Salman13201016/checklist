<?php
    include '../db/db_config.php';
    $cat= $_POST['category'];
    $sql = "SELECT * FROM categories where cat_name='$cat'";
    $query = mysqli_query($con,$sql);
    if(mysqli_num_rows($query)>0){
        echo 0;
        // echo "Your value already existed. Please enter a unique category";
    }
    else{
        $sql = "INSERT INTO categories(cat_name) VALUES ('$cat')";
        $query = mysqli_query($con,$sql);
        if(!$query){
            echo 1;
            // echo "Something Went Wrong";
        }
        else{
            $sql = "SELECT * FROM categories";
            $query = mysqli_query($con,$sql);
            $count = 1;
            $res = [];
            while($result = mysqli_fetch_assoc($query)){
                array_push($res,$result['cat_name']);
            }
            echo json_encode($res);
            // echo "Your Data Has Been Inserted Successfully";
        }
    }
    
    
?>