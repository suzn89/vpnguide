$(function() {
  if(navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){

    $('.device').attr('href','tablet.html');
    //모바일(스마트폰+태블릿)일 때 실행 될 스크립트
  
  }
  $('.menubtn').click(function() {
    $(this).toggleClass('close');
    $('.nav').toggleClass('open');
    $('.menuSide').toggleClass('open');
  });

  $('.depth1 > li > a').on('click', function() {
    if ($(this).hasClass('select')) {
      $(this).removeClass('select');
      $(this)
        .siblings('.sub')
        .slideUp(200);      
    } else {       
      $('.depth1 > li > a').removeClass('select');
      $(this).addClass('select');
      $('.sub').slideUp(200);
      $(this)
        .siblings('.sub')
        .slideDown(200);
    }
  });
});
