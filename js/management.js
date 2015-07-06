/**
 * Created by raynorchan on 15-7-5.
 */
var animateTime = 400;

//先隐藏所有的PageContent 再显示需要显示的Content
$(document).ready(function(){
    $(".page-contents").hide();
    $("#homepage-content").show(animateTime);

    $("#manage-homepage-content-menu-item").click(function () {
        $(".page-contents").hide();
        $("#homepage-content").show(animateTime);
    });

});