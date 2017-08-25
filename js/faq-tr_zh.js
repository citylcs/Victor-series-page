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
    // top menu event
    let windowHeight = $(window).height();
    $(window).scroll(function(){
        let distance = windowHeight - $(window).scrollTop();
        if(distance < 800){
            $('.topRight').css("background-color","#333");
            $('.topRight').css("position","fixed");
        }
        else{
            $('.topRight').css("position","absolute");
        }
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
    //ajax
    let oAjax = $('#oAjax');
    $('.two').click(function () {
        $.ajax({
            url: '../txt/mobile-tr_zh.txt',
            type: 'GET',
            success:function (data) {
                oAjax.html(data);
                $('.two i').css({'color':'#333'});
                $('.one i').css({'color':'#888'});
                console.log('switch on mobile phone');
            }
        })
    });
    $('.one').click(function () {
        $.ajax({
            url: '../txt/pc-tr_zh.txt',
            type: 'GET',
            success:function (data) {
                oAjax.html(data);
                $('.one i').css({'color':'#333'});
                $('.two i').css({'color':'#888'});
                console.log('swPC');
            }
        })
    })
});
