$(document).ready(function() {
        $("#contenTabs div").hide();
        $("#tabs li:first").attr("id","current");
        $("#contenTabs div:first").fadeIn();
 
    $('#tabs a').click(function(e) {
        e.preventDefault();
        $("#contenTabs div").hide();
        $("#tabs li").attr("id","");
        $(this).parent().attr("id","current");
        $('#' + $(this).attr('title')).fadeIn();
    });
});