!function(d,s,id) {
  var js,
      fjs = d.getElementsByTagName(s)[0],
      p   = /^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)) {
    js     = d.createElement(s);
    js.id  = id;
    js.src = p + "://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
  }
} (document,"script","twitter-wjs");

function resize_report() {
  if ($(window).height() < 1200) {
    $('#report-doc > iframe').css('height', 5500 + 'px');
  }
  else {
    $('#report-doc > iframe').css('height', ($(window).height() - $('#title').height() - 65) + 'px');
  }
}

$(document).ready(function()
{
  $(window).on('resize', function()
  {
    resize_report();
  });
  resize_report();
});
