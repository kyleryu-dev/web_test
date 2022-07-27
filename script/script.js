$(function() {

  /* scroll 함수 */
  $(window).scroll(function() {
    /* scroll_down 애니메이션 */
    if($(window).scrollTop() > 10) {
      $('.scroll_down').css('opacity',0);
    } else {
      $('.scroll_down').css('opacity',1);
    }
  });
  /* //scroll 함수 - 하나만 사용 가능 => 이 함수 내부에 스크롤 기능 필요한 함수 모을 것 */
    
});
/* //ready function */