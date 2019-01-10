// js
// 20170124
// inday jin

$(window).load(function() {
    if ($('.index_box').hasClass('hasC')) {
        $('.gnb_s_box').removeClass('db');
        var winW = $(window).width();
        var contW = $('#header').width() + $('.index_box>.fr').width();
        $('.in_slide_ov').width(winW - contW);
        $('.gnb li').mouseenter(function() {
            $(this).addClass('activ').siblings().removeClass('activ');
            $('.gnb_s_box').addClass('db');
            $('.gnb_s_cont ul.ul').eq($(this).index()).addClass('db').siblings().removeClass('db');
        })
        $('#header').mouseleave(function() {
            $('.gnb_s_box').removeClass('db');
        })
    }
    $('.gnb li').mouseenter(function() {
        $(this).addClass('activ').siblings().removeClass('activ');
        $('.gnb_s_cont ul.ul').eq($(this).index()).addClass('db').siblings().removeClass('db');
    })
    $('.index_bxs').bxSlider({
        slideWidth: 570,
        mode: 'vertical',
        captions: true,
        moveSlides: 1,
        auto: true,
        pager: false,
        controls: true
    });
    $('.rmbx_bxs').bxSlider({
        pager: true
    });
});
