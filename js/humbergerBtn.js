/* ハンバーガーボタンのクリックで、メニューを開閉する */
$(".bl_humbergerBtn").click(function () {
  /* ハンバーガーボタンのオープンを設定 */
  $(this).toggleClass("is_close");
  /* ナビゲーションの表示を設定 */
  $(".bl_headerNav").toggleClass("is_fade");
  /* スクロールの無を設定 */
  $("body").toggleClass("is_noscroll");
});

/* どこかがクリックされたときに、ナビゲーションを隠す */
$(".bl_headerNav").click(function () {
  /* ハンバーガーボタンのクローズを設定 */
  $(".bl_humbergerBtn").removeClass("is_close");
  /* ナビゲーションの非表示を設定 */
  $(".bl_headerNav").removeClass("is_fade");
  /* スクロールの有を設定 */
  $("body").removeClass("is_noscroll");
});
