$(document).ready(function(){
    // console.log("hello");
$("#sel_cat_name").change(function(){
    cat_id = $(this).find(":selected").val();
    console.log(cat_id);
    $.ajax({
        type:"post",
        data:{'cat_id':cat_id},
        url: 'sub_cat_show.php',
        success: function(response){
            response_data = $.parseJSON(response)
            console.log(response_data);
            $('#sel_sub_cat_name').children().remove().end()
            .append('<option selected value="whatever">Select Sub Category Name</option>') ;
            sel_var = '';
            for(i=0;i<response_data[1].length;i++){
                sel_var += '<option value="whatever">'+response_data[1][i]+'</option>'
                console.log(sel_var)
                // ('#sel_sub_cat_name').append(sel_var)
            }
            $('#sel_sub_cat_name').append(sel_var)
            // console.log(response)
           
            // row = "<tr><td>"+response_data[0].length+"</td><td style='display:none;'>"+response_data[1][response_data[1].length-1]+"</td><td>"+response_data[0][response_data[0].length-1]+"</td><td>"+response_data[1][response_data[0].length-1]+"</td><td><a href='#' id='edit_btn' class='btn btn-primary action'><i class='far fa-edit'></i></a> <a href='#' class='btn btn-primary action'><i class='fa fa-trash'></i></a></td></tr>"
            // console.log(row)
            // $("#sub_cat_tbody").append(row)
            // location.reload();
            // response_data = $.parseJSON(response)
            // console.log(response_data[0][0],response_data[1])
            // $(current).closest("tr").find("td:eq(2)").text(response_data[0][0])
            
        }
    });
    
});
});