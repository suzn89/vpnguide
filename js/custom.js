$(function() {
  var filter = "win16|win32|win64|mac|macintel";
  if ( navigator.platform ) { 
    if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
      $('.device').attr('href','tablet.html');
      alert('mobile 접속');
    } 
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
