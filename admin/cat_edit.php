<?php
    include '../db/db_config.php';
    $cat_name = $_POST['category'];
    $id = $_POST['id'];
    $sql = "UPDATE categories SET cat_name = '$cat_name' WHERE id='$id'";
    $query = mysqli_query($con,$sql);
    if($query){
        $sql = "SELECT * FROM categories where id='$id'";
        $query = mysqli_query($con,$sql);
        $count = 1;
        $res = [];
        $res_id = [];
        while($result = mysqli_fetch_assoc($query)){
            array_push($res,$result['cat_name']);
            array_push($res_id,$result['id']);
        }
        echo json_encode(array($res,$res_id));
    }
    else{
        echo "Failed";
    }
    
?>