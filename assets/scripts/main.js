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

        function loadInfo(estado) {
          var textoMovilidad = '</div> </div><div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> <img class="logoServicios" src="http://localhost/wp-content/themes/placeholdernameForMapaWP/dist/images/bicycle.png" /> Movilidad</a>      </h4> </div> <div id="collapse2" class="panel-collapse collapse">';
          var textoDerechosCiviles = '</div> </div> <div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> <img class="logoServicios" src="http://localhost/wp-content/themes/placeholdernameForMapaWP/dist/images/teamwork.png" /> Derechos Civiles</a>      </h4> </div> <div id="collapse3" class="panel-collapse collapse">';
          var textoMedioAmbiente = '<div id="menuServicios"><div class="panel-group" id="accordion"> <div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> <img class="logoServicios" src="http://localhost/wp-content/themes/placeholdernameForMapaWP/dist/images/earth-day.png" /> Medio Ambiente</a>      </h4> </div> <div id="collapse1" class="panel-collapse collapse">';
          var textoOtros = '</div> </div> <div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"> <img class="logoServicios" src="http://localhost/wp-content/themes/placeholdernameForMapaWP/dist/images/packing.png" /> Otros</a>      </h4> </div> <div id="collapse4" class="panel-collapse collapse">';
          var end = '</div></div></div>';
          for (var i = 0; i < Data.length; i++) {
            if (Data[i][4] === (estado + ' ')) {
              if (Data[i][2] === 'movilidad ') {
                textoMovilidad += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="'+  Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
                if (!(Data[i][5] === '' || Data[i][5] === ' ')) {
                  textoMovilidad += '<a href="' + Data[i][5] + '"><i class="fab fa-facebook-square"></i></a>';
                }
                if (!(Data[i][6] === '' || Data[i][6] === ' ')) {
                  textoMovilidad += '<a href="' + Data[i][6] + '"><i class="fas fa-globe"></i></a>';
                }
                textoMovilidad += ' </div> </div> </div> </div>';
              } else if (Data[i][2] === 'medio-ambiente ') {
                textoMedioAmbiente += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="'+  Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
               if (!(Data[i][5] === '' || Data[i][5] === ' ')) {
                  textoMedioAmbiente += '<a href="' + Data[i][5] + '"><i class="fab fa-facebook-square"></i></a>';
                }
                if (!(Data[i][6] === '' || Data[i][6] === ' '))  {
                  textoMedioAmbiente += '<a href="' + Data[i][6] + '"><i class="fas fa-globe"></i></a>';
                }
                textoMedioAmbiente += ' </div> </div> </div> </div>';
              } else if (Data[i][2] === 'derechos-civiles ') {
                textoDerechosCiviles += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="'+  Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
               if (!(Data[i][5] === '' || Data[i][5] === ' ')) {
                  textoDerechosCiviles += '<a href="' + Data[i][5] + '"><i class="fab fa-facebook-square"></i></a>';
                }
                if (!(Data[i][6] === '' || Data[i][6] === ' ') )  {
                  textoDerechosCiviles += '<a href="' + Data[i][6] + '"><i class="fas fa-globe"></i></a>';
                }
                textoDerechosCiviles += ' </div> </div> </div> </div>';
              } else if (Data[i][2] === 'otros ') {
                textoOtros += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="'+  Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
                if (!(Data[i][5] === '' || Data[i][5] === ' ')) {
                  textoOtros += '<a href="' + Data[i][5] + '"><i class="fab fa-facebook-square"></i></a>';
                }
                console.log(Data[i][6]);
                if (!(Data[i][6] === '' || Data[i][6] === ' ')) {
                  textoOtros += '<a href="' + Data[i][6] + '"><i class="fas fa-globe"></i></a>';
                }
                textoOtros += ' </div> </div> </div> </div>';
              } else {
                console.log("error en categoria");
              }
            }
          }
          $('#informacion').fadeOut(function() {
            $('#informacion').html(textoMedioAmbiente + textoMovilidad + textoDerechosCiviles + textoOtros + end);
            $('#informacion').fadeIn();
          });
        }

        $('[data-toggle="tooltip"]').tooltip();
        $('.land').click(function(event) {
          var estado = $(this).data("title");
          console.log(estado);
          $('.land').removeClass('active');
          $(this).addClass("active");
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
