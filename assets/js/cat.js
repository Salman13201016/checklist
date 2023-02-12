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
                        console.log(response_data[response_data.length-1])
                        $row = "<tr><td>"+response_data.length+"</td><td>"+response_data[response_data.length-1]+"</td><td>Edit Delete</td></tr>"
                        $("#cat_tbody").append($row)
                        $("#cat_notification").html(value) 
                        $("#cat_notification").show();
                        $("#cat_notification").css('color','green');
                        
                    }
                    
                }
            });
        }
        

    });

    $(document).on('click','#edit_btn',function(){
        console.log("edit");
        $("#edit_card").show();
        $("#add_card").hide();
        cat_name = $(this).closest("tr").find("td:eq(1)").text();
        $("#edit_cat_name").val(cat_name)
        console.log(cat_name);
    });

    $(document).on('click','#back_cat',function(){
        console.log("edit");
        $("#edit_card").hide();
        $("#add_card").show();
    });
});