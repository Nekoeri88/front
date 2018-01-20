$(function () {
  //ページ内スクロール
  $("a[href^='#']").on("click", function () {
    var p = $($(this).attr("href")).offset().top;
    $('html,body').animate({ scrollTop: p }, 'fast');
    return false;
  });
});


//ナビゲーションメニューを上部に固定する
$(function () {
  // メニューのtop座標を取得する
  var nav = $('nav');
  var prev = nav.prev();
  var floatMenu = function () {
    // スクロール位置がメニューのtop座標を超えたら固定にする
    if ($(window).scrollTop() > prev.offset().top + prev.height()) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
  }
  $(window).scroll(floatMenu);
  $('body').bind('touchmove', floatMenu);
  $(window).on("load scroll resize", floatMenu);
});

$(function () {
  $(".btn_menu").on("click", function () {
    if ($(".navbar").is(":hidden")) {
      $(".navbar").slideDown("fast");
    } else {
      $(".navbar").slideUp("fast");
    }
  })
});


