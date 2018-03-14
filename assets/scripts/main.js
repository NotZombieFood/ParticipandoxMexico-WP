/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        var Data = [];

        function getData() {
          console.log('running...');
          $('.objetos').each(function(i, obj) {
            var logo = $(this).data("logo");
            var imagen = $(this).data("imagen");
            var categoria = $(this).data("categoria");
            var nombre = $(this).data("nombre");
            var descripcion = $(this).data("descripcion");
            var facebook = $(this).data("facebook");
            var sitioweb = $(this).data("sitioweb");
            var ciudad = $(this).data("ciudad");
            var estado = $(this).data("estado");
            var subarray = [nombre, descripcion, categoria, ciudad, estado, facebook, sitioweb, logo, imagen];
            Data.push(subarray);
          });
          
        }
        
       console.log('wu');
       getData();
       console.log(Data);
        function loadInfo(estado){
          $('#informacion').fadeOut(function() {
            $('#informacion').html('<h1>'+estado+'</h1>');
            $('#informacion').fadeIn();
          });
        }

        $('[data-toggle="tooltip"]').tooltip();
        $('.land').click(function(event) {
          var estado = $(this).data("title");
          console.log(estado);
          $('.land').removeClass('active');
          $(this).addClass( "active" );
          loadInfo(estado);
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
