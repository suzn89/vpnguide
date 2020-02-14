$(function() {
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
