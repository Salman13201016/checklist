$(document).ready(function(){
    $("#cat_notification").hide();
    $("#sub_cat").click(function(){
        console.log("yes");
        var cat = $('#cat_name').val();
        // console.log("helo",cat)
        if(cat == ''){
            $("#cat_notification").html("The category field can not be empty") 
            $("#cat_notification").show();
            $("#cat_notification").css('color','red');
        }
        // console.log(cat);

        else{
            $.ajax({
                type:"post",
                data:{'category':cat},
                url: 'cat_insert.php',
                success: function(response){
                    if(response==0 || response==1){
                        if(response==0){
                            value = "Your value already existed. Please enter a unique category"
                        }
                        else{
                            value = "Something Went Wrong"
                        }
                        
                        $("#cat_notification").html(value) 
                        $("#cat_notification").show();
                        $("#cat_notification").css('color','red');
                    }
                    else{
                        value = "The category has been inserted successfully"
                        response_data = $.parseJSON(response)
                        // response_data1 = $.parseJSON(response1)
                        console.log(response_data);
                        console.log(response_data[1][response_data[1].length-1])
                        row = "<tr><td>"+response_data[0].length+"</td><td style='display:none;'>"+response_data[1][response_data[1].length-1]+"</td><td>"+response_data[0][response_data[0].length-1]+"</td><td><a href='#' id='edit_btn' class='btn btn-primary action'><i class='far fa-edit'></i></a> <a href='#' class='btn btn-primary action'><i class='fa fa-trash'></i></a></td></tr>"
                        console.log(row)
                        $("#cat_tbody").append(row)
                        $("#cat_notification").html(value) 
                        $("#cat_notification").show();
                        $("#cat_notification").css('color','green');
                        
                    }
                    
                }
            });
        }
        

    });
    var current = ''
    $(document).on('click','#edit_btn',function(){
        console.log("edit");
        current =$(this)
        $("#edit_card").show();
        $("#add_card").hide();
        cat_name = $(this).closest("tr").find("td:eq(2)").text();
        cat_id = $(this).closest("tr").find("td:eq(1)").text();
        $("#edit_cat_name").val(cat_name)
        $("#edit_cat_id").val(cat_id)
        console.log(cat_name);
    });
    $(document).on('click','#edit_cat',function(){
        console.log("edit cat");
        update_cat = $("#edit_cat_name").val()
        cat_id = $("#edit_cat_id").val()
        
        $.ajax({
            type:"post",
            data:{'category':update_cat,'id':cat_id},
            url: 'cat_edit.php',
            success: function(response){
                console.log(response)
                // location.reload();
                response_data = $.parseJSON(response)
                console.log(response_data[0][0],response_data[1])
                $(current).closest("tr").find("td:eq(2)").text(response_data[0][0])
                
            }
        });
    });

    $(document).on('click','#back_cat',function(){
        console.log("edit");
        $("#edit_card").hide();
        $("#add_card").show();
    });
    $(document).on('click','#del_btn',function(){
        console.log("edit");
        $("#edit_card").hide();
        $("#add_card").show();
        cur_del = $(this).closest("tr")
        cat_id = $(this).closest("tr").find("td:eq(1)").text();
        if (confirm("Do you want delete this data")) {
            // your deletion code
            console.log("yes delete")
            $.ajax({
                type:"post",
                data:{'id':cat_id},
                url: 'cat_delete.php',
                success: function(response){
                    console.log(response)
                    $(cur_del).remove()
                    console.log($("#cat_tbody tr").length);
                    $("#cat_tbody tr").each(function(index){
                        console.log(index);
                        i = index+1
                        j = i.toString()
                        $("#cat_tbody tr:eq("+index+") td:eq(0)").text(j);
                    })
                    // location.reload();
                    
                }
            });
        }
    });
});