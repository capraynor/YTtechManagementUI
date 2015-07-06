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
    
    $(".btn").click(function () {

        var modalTitle; // modal框标题

        var noTitleModalTitleLabel = $("#no-title-modal-label")[0]; // 拿到首页中的modal以进行定制

        switch (this.id){

            //左上角标题
            case ("title_left_up_button"):

                modalTitle = "更改 " + $("#no-title-1")[0].innerText;

                noTitleModalTitleLabel.innerText = modalTitle;

                break;
            //大标题
            case ("main_title_button"):

                modalTitle = "更改 "+ $("#no-title-2")[0].innerText;

                noTitleModalTitleLabel.innerText = modalTitle;

                break;
            //大标题下面的那行说明文字
            case ("below_main_title_button"):

                modalTitle = "更改 "+ $("#no-title-3")[0].innerText;

                noTitleModalTitleLabel.innerText = modalTitle;

                break;

            //公司案例
            case ("showcase_button"):

                modalTitle = "更改 "+ $("#no-title-4")[0].innerText;

                noTitleModalTitleLabel.innerText = modalTitle;

                break;


        }
    });

});