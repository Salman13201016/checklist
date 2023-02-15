$(document).ready(function(){
    cat_id = ''
    $("#sel_cat_name").change(function(){
        cat_id = $(this).find(":selected").val();
        
    });
    $("#sub_cat_cat").click(function(){
        cat_id = cat_id
        sub_cat_name = $("#sub_cat_name").val();
        console.log(cat_id,sub_cat_name)
    });
    
});