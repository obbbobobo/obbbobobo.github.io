
/* ハンバーガーボタン */
$(".opn-btn").click(function () {
  $(this).toggleClass('active');
  $(".header-nav").toggleClass('active');
  $(".mask").fadeToggle();
});

$(".header-nav ul li a").click(function () {
    $(".opn-btn").removeClass('active');
    $(".header-nav").removeClass('active');
    $(".mask").fadeToggle();
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
	if (scroll >= 2350){
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

/* #page-topをクリックした際の設定 */
$('#page-top a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 550);
    return false;
});

/* logoの表示 */
$(window).on('load',function(){
  $("#load").delay(1500).fadeOut('slow');//1.5秒（1500ms）待機してからフェードアウト
  $("#load_logo").delay(1200).fadeOut('slow');//1.2秒（1200ms）待機してからフェードアウト
  $(".load_p").delay(1200).fadeOut('slow');
});

$(window).on('load', function(){
  $('.top-container__main-visual__text-logo1').addClass('open');
  $('.top-container__main-visual__text-logo2').addClass('open');
});