$(window).ready(function(){
    // dropdown hover
    $(".dropdown-menu").hover(function(){
        $(this).removeClass("hover0");
        $(this).stop(true,true).fadeIn('fast');
    },function(){
        $(this).addClass("hover0");
        let menu_hover = $(this).parent().children(".dropdown-toggle");
        let drop_box = $(this);
        setTimeout(function(){
            if(menu_hover.hasClass("hover1")){
                drop_box.stop(true,true).fadeOut('fast');
            }
            else{}
        },100);
    });
    $(".dropdown-toggle").hover(function(){
        $(this).removeClass("hover1");
        $(this).parent().children(".dropdown-menu").stop(true,true).fadeIn('fast');
    },function(){
        let drop_box2 = $(this).parent().children(".dropdown-menu");
        setTimeout(function() {
            if (drop_box2.hasClass("hover0")) {
                drop_box2.stop(true,true).fadeOut('fast');
            }
            else{}
        },100);
        $(this).addClass("hover1");
    });
    // media query slide event
    $('.touch_bar').click(function(){
        $('.slideEvent').slideToggle(200);
        $('.slideEvent').css("position","fixed");
    });
    $('.touch_bar').click(function(){
        $('.touch_bar').toggleClass("touch_bar1");
    });
    $('#hs').click(function(){
        $('#mq_hide').slideToggle(200);
    });
    $('#hs1').click(function(){
        $('#mq_hide2').slideToggle(200);
    });
});