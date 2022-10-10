/* トグルボタン制御 */
$(".bl_humbergerBtn").click(function () {
  /* ハンバーガーボタンのオープンを設定 */
  $(this).toggleClass("is_close");
  /* ナビゲーションの表示を設定 */
  $(".bl_headerNav").toggleClass("is_fade");
  /* スクロールの無を設定 */
  $("body").toggleClass("is_noscroll");
});

/* メニューのリンクが押下されたときに、ナビゲーションを隠す */
$(".bl_headerNav_link").click(function () {
  if ($(window).width() < 768) {
    /* ハンバーガーボタンのクローズを設定 */
    $(".bl_humbergerBtn").removeClass("is_close");
    /* ナビゲーションの非表示を設定 */
    $(".bl_headerNav").removeClass("is_fade");
    /* スクロールの有を設定 */
    $("body").removeClass("is_noscroll");
  }
});
