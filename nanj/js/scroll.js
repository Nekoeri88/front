$(function () {
  //ページ内スクロール
  $(".btn_nav").click(function () {
    var i = $(".btn_nav").index(this)
    var p = $(".content").eq(i).offset().top;
    $('html,body').animate({ scrollTop: p }, 'fast');
    return false;
  });

  //ページ上部へ戻る
  $(".btn_top").click(function () {
    $('html,body').animate({ scrollTop: 0 }, 'fast');
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
  $(".btn_menu").click(function () {
    if ($(".navbar").is(":hidden")) {
      $(".navbar").slideDown("fast");
    } else {
      $(".navbar").slideUp("fast");
    }
  })
});


