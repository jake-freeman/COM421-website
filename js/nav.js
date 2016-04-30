var lnStickyNavigation;

$(document).ready(function()
{
  applyNavigation();
});

/* NAVIGATION FUNCTIONS */

function applyNavigation()
{
  applyClickEvent();
  applyNavigationFixForPhone();
  applyScrollSpy();
  applyStickyNavigation();
}

function applyClickEvent()
{
  $('a[href^="#"]').on('click', function(e)
  {
    e.preventDefault();

    if( $( $.attr(this, 'href') ).length > 0 )
    {
      $('html, body').animate(
      {
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 400);
    }
    return false;
  });
}

function applyNavigationFixForPhone()
{
  $('.navbar li a').click(function(event)
  {
    $('.navbar-collapse').removeClass('in').addClass('collapse');
  });
}

function applyScrollSpy()
{
  $('#sidenav').on('activate.bs.scrollspy', function()
  {
    window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
  });
}

function applyStickyNavigation()
{
  lnStickyNavigation = $('#title').offset().top + 340;

  $(window).on('scroll', function()
  {
    stickyNavigation();
  });

  stickyNavigation();
}

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
