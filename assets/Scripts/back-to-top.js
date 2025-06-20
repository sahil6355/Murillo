$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $('.back-to-top').addClass('show-back-to-top');
  } else {
    $('.back-to-top').removeClass('show-back-to-top');
  }
});

$('.back-to-top').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 0);
  return false;
});

$(window).on("scroll", function () {
  var a = $(document).height();
  var b = $(window).height();
  var c = $(window).scrollTop();
  var d = c / (a - b) * 100;
  $(".progress-bar").css({
      width: d + "%"
  });
});
