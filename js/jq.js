
$(document).ready(function(){
     $("#close-input").click(function(){
        $("#info").hide();
        $("html").removeClass("open-body");
    });
    $("#dropdown-toggle").click(function(){
        $("#info").show();
        $("html").addClass("open-body");
        
    });
});
