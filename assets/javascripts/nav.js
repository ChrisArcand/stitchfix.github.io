// Generated by CoffeeScript 1.7.1
(function() {
  window.StitchFix || (window.StitchFix = {});

  window.StitchFix.Nav = {
    init: function() {
      $('body.home').scrollspy({
        target: '.top-nav',
        offset: 100
      });
      return $('.top-nav').on('activate.bs.scrollspy', function(e) {
        var target;
        target = $(e.target).children('a').attr('href');
        if (target === '#intro') {
          return $('.top-nav').removeClass('nav-trans');
        } else {
          return $('.top-nav').addClass('nav-trans');
        }
      });
    }
  };

  $(function() {
    return window.StitchFix.Nav.init();
  });

}).call(this);
