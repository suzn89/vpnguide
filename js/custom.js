$(function() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


  if(!isMobile) {
    $('.device').attr('href','window.html');
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
