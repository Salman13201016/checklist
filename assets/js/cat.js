$(document).ready(function(){
    $("#cat_notification").hide();
    $("#sub_cat").click(function(){
        console.log("yes");
        var cat = $('#cat_name').val();
        // console.log(cat);

        $.ajax({
            type:"post",
            data:{'category':cat},
            url: 'cat_insert.php',
            success: function(response){
                $("#cat_notification").html(response) 
                $("#cat_notification").show();
                $("#cat_notification").css('color','green');
            }
        });

    });
});