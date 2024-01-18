$(function() {

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    fade: true,
    speed: 2000,
    arrows: false,
  });

  // navのホバーアニメーション
  $('.menu').on('mouseover', function(){
    $(this).animate({
      opacity:0.5,
    },0);
  });
  $('.menu').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
    },100);
  });

  // TOPボタン
  $(window).on('scroll', function() {
    if($(window).scrollTop() >= 100) {
      $('#backBtn').css('display', 'inline');
    } else {
      $('#backBtn').css('display', 'none');
    }
  });

  // スクロール
  $('a[href^="#"]').on('click', function(){

    const href = $((this).attr('href'));
    const position = $('href').offset().top;

    if(href == "#") {
      $('html,body').animate({
        scrollTop: html
      },1000);
    } else {
      $('html,body').animate({
        scrollTop: position
      },1000);
    }
  });

  // フェードイン
  $(window).on('scroll', function(){

    const winScroll = $(window).scrollTop();
    const winHeight = $(window).height(); 
    const scrollPos = winScroll + winHeight;
    const sectionPos = $('section').offset().top;

    if(sectionPos < scrollPos) {
      $('section').addClass('fadeIn');
    } 

  });

  // モーダルウィンドウ
  $('.case-img').on('click', function(){
    const caseImg = $(this).attr('src');
    $('.modalImg').attr('src','caseImg');
    $('.modal').css('display','block');
  });
  
  $('.close').on('click', function(){
    $('.modal').css('display','none')
  });

});