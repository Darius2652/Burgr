$(function() {
  $(document).on('mouseover touchstart', '.nav__item', function(e) {
    e.stopPropagation();
    $('.nav__highlight').css('filter', 'blur(40px)');
    setTimeout(() => {
      $('.nav__highlight').text($(this).text());
      $('.nav__highlight').css('filter', 'blur(0px)');
    }, 50);
  })
  $(document).on('mouseover', '.nav', function(e) {
    e.stopPropagation();
    $('.nav__highlight').css('filter', 'blur(40px)');
    setTimeout(() => {
      $('.nav__highlight').text('');
    }, 50);
  })
  $(document).on('click', '.nav-toggle', function(e) {
    $('.nav').toggleClass('nav--visible');
    $('.nav-toggle').toggleClass('nav-toggle--toggled');
  })
})