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
        console.log("active common");

        // JavaScript to be fired on all pages
        $("#menu-close").click(function(e) {
          e.preventDefault();
          $("#sidebar-wrapper").toggleClass("active");
        });
        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#sidebar-wrapper").toggleClass("active");
        });
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    'home': {
      init: function() {
        var Data = [];

        function getData() {
          console.log('running...');
          $('.palabras').each(function(i, obj) {
            Data.push($(this).data("texto"));
          });
        }
        getData();
        var i = 0;
        console.log("active home");
        console.log(Data);

        function loop() {
          $("#cta_hero").html(Data[i]);
          i = i + 1;
          if (i === Data.length) {
            i = 0;
          }
        }
        loop();
        setInterval(function() {
          loop();
        }, 500);

      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    'mapa': {
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
          var textoMovilidad = '</div> </div><div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"> <img class="logoServicios" src="http://mapa.southcentralus.cloudapp.azure.com/wp-content/themes/mapa-theme/dist/images/bicycle.png" /> Movilidad</a>      </h4> </div> <div id="collapse2" class="panel-collapse collapse">';
          var textoDerechosCiviles = '</div> </div> <div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> <img class="logoServicios" src="http://mapa.southcentralus.cloudapp.azure.com/wp-content/themes/mapa-theme/dist/images/teamwork.png" /> Derechos Civiles</a>      </h4> </div> <div id="collapse3" class="panel-collapse collapse">';
          var textoMedioAmbiente = '<div id="menuServicios"><div class="panel-group" id="accordion"> <div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"> <img class="logoServicios" src="http://mapa.southcentralus.cloudapp.azure.com/wp-content/themes/mapa-theme/dist/images/earth-day.png" /> Medio Ambiente</a>      </h4> </div> <div id="collapse1" class="panel-collapse collapse">';
          var textoOtros = '</div> </div> <div class="panel panel-default panel-servicios"> <div class="panel-heading "> <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"> <img class="logoServicios" src="http://mapa.southcentralus.cloudapp.azure.com/wp-content/themes/mapa-theme/dist/images/packing.png" /> Otros</a>      </h4> </div> <div id="collapse4" class="panel-collapse collapse">';
          var end = '</div></div></div>';
          for (var i = 0; i < Data.length; i++) {
            if (Data[i][4] === (estado + ' ')) {
              if (Data[i][2] === 'movilidad ') {
                textoMovilidad += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="' + Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
                if (!(Data[i][5] === '' || Data[i][5] === ' ')) {
                  textoMovilidad += '<a href="' + Data[i][5] + '"><i class="fab fa-facebook-square"></i></a>';
                }
                if (!(Data[i][6] === '' || Data[i][6] === ' ')) {
                  textoMovilidad += '<a href="' + Data[i][6] + '"><i class="fas fa-globe"></i></a>';
                }
                textoMovilidad += ' </div> </div> </div> </div>';
              } else if (Data[i][2] === 'medio-ambiente ') {
                textoMedioAmbiente += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="' + Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
                if (!(Data[i][5] === '' || Data[i][5] === ' ')) {
                  textoMedioAmbiente += '<a href="' + Data[i][5] + '"><i class="fab fa-facebook-square"></i></a>';
                }
                if (!(Data[i][6] === '' || Data[i][6] === ' ')) {
                  textoMedioAmbiente += '<a href="' + Data[i][6] + '"><i class="fas fa-globe"></i></a>';
                }
                textoMedioAmbiente += ' </div> </div> </div> </div>';
              } else if (Data[i][2] === 'derechos-civiles ') {
                textoDerechosCiviles += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="' + Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
                if (!(Data[i][5] === '' || Data[i][5] === ' ')) {
                  textoDerechosCiviles += '<a href="' + Data[i][5] + '"><i class="fab fa-facebook-square"></i></a>';
                }
                if (!(Data[i][6] === '' || Data[i][6] === ' ')) {
                  textoDerechosCiviles += '<a href="' + Data[i][6] + '"><i class="fas fa-globe"></i></a>';
                }
                textoDerechosCiviles += ' </div> </div> </div> </div>';
              } else if (Data[i][2] === 'otros ') {
                textoOtros += '<div class="panel-body"> <div class="container"> <div class="row"> <div class="col-md-3"> <img src="' + Data[i][7] + ' "> </div> <div class="col-md-9"> <h1>' + Data[i][0] + '</h1> <h2>' + Data[i][3] + ',' + Data[i][4] + '</h2> <p>' + Data[i][4] + '</p>';
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
    'single': {
      init: function() {
        console.log('estamos en single tuitea');
        // JavaScript to be fired on the about us page
        if ($('#tweet_text').length) {
          var tweet = $('#tweet_text').text();
          $(document).ready(function() {
            $("#myTable").tablesorter();
          });
          $('.twitter-icon').each(function(i, obj) {
            var username = $(this).data("handle");
            var tweet_completo = username + ' ' + tweet;
            var encoded_tweet = encodeURIComponent(tweet_completo);
            var url_tweet = 'https://twitter.com/intent/tweet?url=null&text=.%40' + encoded_tweet;
            $(this).attr("href", url_tweet);
          });
          $('.logo-partido').each(function(i, obj) {
            var partido = $(this).attr("alt");
            var imagen;
            if (partido === 'PRI') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/PRI_logo_Mexico.png';
            } else if (partido === 'PAN') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/PAN_logo_Mexico.png';
            } else if (partido === 'PRD') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/PRD_logo_Mexico.png';
            } else if (partido === 'PT') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/PT_logo_Mexico.png';
            } else if (partido === 'MORENA') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/Morena.png';
            } else if (partido === 'PNA') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/PNA_logo_Mexico.png';
            } else if (partido === 'PES') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/PES_logo_Mexico.png';
            } else if (partido === 'MC') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/MC_Party_Mexico.png';
            } else if (partido === 'PV') {
              imagen = 'https://mapa.southcentralus.cloudapp.azure.com/wp-content/uploads/2018/03/PVE_logo_Mexico.png';
            }
            console.log(imagen);
            $(this).attr("src", imagen);
          });
        }
        var Data = [];
        var categoriaArray = [];
        function getData() {
          console.log('running...');
          $('.objetos').each(function(i, obj) {
            var categoria = $(this).data("categoria");
            var propuesta = $(this).data("propuesta");
            var subarray = [propuesta, categoria];
            Data.push(subarray);
            categoriaArray.push(categoria);
          });
        }
        if ($('#perfil').length) {
          getData();
          var uniqueNames = [];
          $.each(categoriaArray, function(i, el){
              if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
          });
          for (var i = 0; i < uniqueNames.length; i++) {
                code_btn += "<button class='boton-candidato' id='" + uniqueNames[i] + "'>"+ uniqueNames[i] + "</button>";         
          }
          $("#botones").html(code_btn);
          $('.boton-candidato').on('click', function() {
            var categoriaBTN = $(this).attr("id");
            var code = "";
            for (var i = 0; i < Data.length; i++) {
              if (Data[i][1] === categoriaBTN) {
                code += "<h4>" + Data[i][0] + "</h4>";
              }
            }
            $("#propuestas").html(code);
          });
        }
      }
    },
    'single-candidatos': {
      init: function() {

      }
    },
    'archive': {
      init: function() {
        /**
         * Returns a random integer between min and max values (inclusive)
         */
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        /**
         * Returns a uniquely generated random integer array, so we can use this as our order.
         */
        function getRandomSequence(limit) {
          var arr = [];
          while (arr.length < limit) {
            var randomnumber = getRandomInt(0, limit - 1);
            var found = false;
            for (var i = 0; i < arr.length; i++) {
              if (arr[i] === randomnumber) {
                found = true;
                break;
              }
            }
            if (!found) {
              arr[arr.length] = randomnumber;
            }
          }
          return arr;
        }

        /**
         * Shows randomly ordered columns in a container.
         */
        function orderColumnsRandomly() {
          // Get the children of the container
          var columns = $("#presidentes").children();

          // Empty the container.
          $("#presidentes").html('');

          // Get a random sequence to show the columns
          var sequence = getRandomSequence(columns.length);

          // Loop through the column array with the given sequence and fill the container.
          for (var i = 0; i < sequence.length; i++) {
            $("#presidentes").append($(columns[sequence[i]]));
          }
        }

        if ($("#presidentes").length) {
          orderColumnsRandomly();
        }

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
