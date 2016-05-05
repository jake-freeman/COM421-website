var lnStickyNavigation;

$(document).ready(function()
{
  // make navbar 'sticky'
  lnStickyNavigation = $('#title').offset().top + 340;

  $(window).on('scroll', function()
  {
    stickyNavigation();
  });

  $(window).on('resize', function()
  {
    setNavPos();
  });

  setNavPos();
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

function setNavPos() {
  $('#sidenav').offset(
    {
      left: ($('#title').offset().left + $('#title').width() + 150)
    }
  )
}
