// js
// 20170124
// inday jin

$(window).load(function() {
    $('.bxs_box').bxSlider({
        controls: true,
        auto: true,
        pager: true,
        pagerCustom: '.bxs_tab'
    });
    $('.s2_3_ul li .over_box,.s2_4_ul li .over_box,p.li_img').click(function() {
        console.log('click')
        $('.pop_v_img').attr('src', $(this).siblings('.li_img').attr('data-v'));
        $('.pop_cont').css({'top': $(window).scrollTop() + 100});
        $('.s2_pop_box,.s3_pop_box').addClass('db');
    })
    $('.pop_c_btn,.s2_pop_bg').click(function() {
        $('.s2_pop_box,.s3_pop_box').removeClass('db');
    })
    $('.video_wrap li').on("click",function() {
		$(this).find(".modal,.p_modal").stop().show();
        $('.modal>iframe').css({'top': $(window).scrollTop() + 100});
		$('.cover').show();
		$('.btn_close').show();
	});
	$('.btn_close, .cover').on("click",function() {
		$('.modal').hide();
		$('.cover').hide();
		$('.btn_close').hide();
	});
    $('.mdp').on("click",function() {
		$(this).find(".p_modal").stop().show();
        $('.p_modal').show();
		$('.p_cover').show();
	});
    $('.p_cover').on("click",function() {
		$('.p_modal').hide();
		$('.p_cover').hide();
	});
});
