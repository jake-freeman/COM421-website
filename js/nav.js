var lnStickyNavigation;

$(document).ready(function()
{
  // make navbar 'sticky'
  lnStickyNavigation = $('#title').offset().top + 340;

  $(window).on('scroll', function()
  {
    stickyNavigation();
  });

  stickyNavigation();
});

function stickyNavigation()
{
  if($(window).scrollTop() > lnStickyNavigation)
  {
    $('body').addClass('fixed');
  }
  else
  {
    $('body').removeClass('fixed');
  }
}
