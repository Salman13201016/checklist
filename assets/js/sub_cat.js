$(document).ready(function(){
    cat_id = ''
    $("#sel_cat_name").change(function(){
        cat_id = $(this).find(":selected").val();
        
    });
    $("#sub_cat_cat").click(function(){
        cat_id = cat_id
        sub_cat_name = $("#sub_cat_name").val();
        console.log(cat_id,sub_cat_name)
        $.ajax({
            type:"post",
            data:{'cat_id':cat_id,'sub_cat_name':sub_cat_name},
            url: 'sub_cat_insert.php',
            success: function(response){
                // console.log(response)
                response_data = $.parseJSON(response)
                console.log(response_data);
                row = "<tr><td>"+response_data[0].length+"</td><td style='display:none;'>"+response_data[1][response_data[1].length-1]+"</td><td>"+response_data[0][response_data[0].length-1]+"</td><td>"+response_data[1][response_data[0].length-1]+"</td><td><a href='#' id='edit_btn' class='btn btn-primary action'><i class='far fa-edit'></i></a> <a href='#' class='btn btn-primary action'><i class='fa fa-trash'></i></a></td></tr>"
                console.log(row)
                $("#sub_cat_tbody").append(row)
                // location.reload();
                // response_data = $.parseJSON(response)
                // console.log(response_data[0][0],response_data[1])
                // $(current).closest("tr").find("td:eq(2)").text(response_data[0][0])
                
            }
        });
    });
    
});