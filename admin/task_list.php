<!DOCTYPE html>
<html lang="en">

<?php include 'head.php';?>

<body>
    <div class="container-scroller">
        <!-- partial:../../partials/_navbar.html -->
        <?php include 'upper_nav.php'; ?>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:../../partials/_sidebar.html -->
            <?php include 'side_nav.php'; ?>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row abc">
                        <div id="add_card" class=" col-md-6 mx-auto grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Add Category form</h4>
                                    <span id="cat_notification"></span>
                                    <form class="forms-sample">
                                        <div class="form-group">
                                            <label for="exampleInputUsername1">Select Category Name</label>
                                            <select class="form-control" id="sel_cat_name">

                                                <option>Select Your Cateogry Name</option>
                                                <?php 
                                                    include '../db/db_config.php';
                                                    $sql = "SELECT * FROM categories";
                                                    $query = mysqli_query($con,$sql);
                                                    while($result = mysqli_fetch_assoc($query)){
    
                                                ?>
                                                <option value='<?php echo $result['id'];?>'>
                                                    <?php echo $result['cat_name']; ?></option>
                                                <?php } ?>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputUsername1">Select Sub Category Name</label>
                                            <select class="form-control" id="sel_sub_cat_name">

                                                <option>Select Your Sub Cateogry Name</option>
                                                <?php 
                                                    include '../db/db_config.php';
                                                    $sql = "SELECT * FROM subcats";
                                                    $query = mysqli_query($con,$sql);
                                                    while($result = mysqli_fetch_assoc($query)){
    
                                                ?>
                                                <option value='<?php echo $result['id'];?>'>
                                                    <?php echo $result['sub_cat_name']; ?></option>
                                                <?php } ?>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputUsername1">Sub Category Name</label>
                                            <input type="text" class="form-control" id="sub_cat_name"
                                                placeholder="Enter Sub Category Name" />
                                        </div>
                                        <button type="button" class="btn btn-primary me-2" id="sub_cat_cat">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="edit_card" class="col-md-6 mx-auto grid-margin stretch-card" style="display:none;">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Edit Category form</h4>
                                    <span id="cat_notification"></span>
                                    <form class="forms-sample">
                                        <div class="form-group">
                                            <label for="exampleInputUsername1">Category Name</label>
                                            <input type="text" class="form-control" id="edit_cat_name"
                                                placeholder="Enter Product Category Name" />
                                            <input type="hidden" class="form-control" id="edit_cat_id" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputUsername1">Sub Cateogory</label>
                                            <input type="text" class="form-control" id="edit_cat_name"
                                                placeholder="Enter Product Category Name" />
                                            <input type="hidden" class="form-control" id="edit_cat_id" />
                                        </div>
                                        <button type="button" class="btn btn-primary me-2" id="edit_cat">
                                            Edit
                                        </button>
                                        <button type="button" class="btn btn-primary me-2" id="back_cat">
                                            Back
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mx-auto grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Show Category</h4>
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>SL</th>
                                                    <th style="display:none;">ID</th>
                                                    <th>Category Name</th>
                                                    <th>Sub Category Name</th>
                                                    <th>Action </th>
                                                </tr>
                                            </thead>
                                            <tbody id="sub_cat_tbody">
                                                <?php
                                                    
                                                    $sql = "SELECT subcats.sub_cat_name, categories.cat_name FROM subcats INNER JOIN categories ON subcats.cat_id = categories.id;";
                                                    $query = mysqli_query($con,$sql);
                                                    $count = 1;
                                                    while($result = mysqli_fetch_assoc($query)){
                                                        
                                                    
                                                ?>

                                                <tr>
                                                    <td><?=$count;?></td>
                                                    <td style="display:none;"><?=$result['id'];?></td>
                                                    <td><?=$result['cat_name'];?></td>
                                                    <td><?=$result['sub_cat_name'];?></td>
                                                    <td><a href="#" id="edit_btn" class="btn btn-primary action"><i
                                                                class="far fa-edit"></i></a> <a href="#" id="del_btn"
                                                            class="btn btn-primary action"><i
                                                                class="fa fa-trash"></i></a></td>

                                                </tr>
                                                <?php
                                                    $count++;
                                                    }
                                                ?>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- content-wrapper ends -->
                <!-- partial:../../partials/_footer.html -->
                <?php  include 'main_footer.php';?>
                <!-- partial -->
            </div>
            <!-- main-panel ends -->
            <!-- <div class="main-panel">
          <div class="content-wrapper">
            
          </div>
      </div> -->

            <!-- page-body-wrapper ends -->
        </div>
        <?php  include 'footer_js.php';?>
</body>

</html>