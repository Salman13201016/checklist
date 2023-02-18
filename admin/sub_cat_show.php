<?php
    include '../db/db_config.php';
    $cat_id = $_POST['cat_id'];
    $sql = "SELECT subcats.sub_cat_name, categories.cat_name FROM subcats INNER JOIN categories ON subcats.cat_id = categories.id where subcats.cat_id='$cat_id'";
    $query = mysqli_query($con,$sql);
    $count = 1;
        $res = [];
        $res_2 = [];
        while($result = mysqli_fetch_assoc($query)){
            array_push($res,$result['cat_name']);
            array_push($res_2,$result['sub_cat_name']);
        }
        echo json_encode(array($res,$res_2));
?>