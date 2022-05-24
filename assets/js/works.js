
/* ハンバーガーボタン */
$(".opn-btn").click(function () {
  $(this).toggleClass('active');
  $(".header-nav").toggleClass('active');
  $(".mask").fadeToggle();
});

$(".mask a").click(function () {
    $(".opn-btn").removeClass('active');
    $(".mask").removeClass('panelactive');
});

/* ヘッダー */
$(window).on('scroll', function () {
  if ($('.header').height() < $(this).scrollTop()) { 
$('.header').addClass('change-color'); }
  else {
$('.header').removeClass('change-color'); } });

/* トップスクロール */
function PageTopAnime() {
	let scroll = $(window).scrollTop();
	if (scroll >= 300){
		$('#page-top').removeClass('down');
		$('#page-top').addClass('up');
	}else{
		if($('#page-top').hasClass('up')){
			$('#page-top').removeClass('up');
			$('#page-top').addClass('down');
		}
	}
}

$(window).scroll(function () {
	PageTopAnime();
});

$(window).on('load', function () {
	PageTopAnime();
});

$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 550);
    return false;
});