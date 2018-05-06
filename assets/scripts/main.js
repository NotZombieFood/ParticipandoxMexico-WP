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
    'quizQuestions': {
      init: function() {
        console.log("preguntas");
        $(document).keydown(function(e) {

          switch (e.keyCodeke) {
            case 53:
              jQuery('#response5').get(0).click();
              break;
            case 52:
              cjQuery('#response4').get(0).click();
              break;
            case 51:
              jQuery('#response3').get(0).click();
              break;
            case 50:
              jQuery('#response2').get(0).click();
              break;
            case 49:
              jQuery('#response1').get(0).click();
              break;
            default:
              console.log("tecla ignorada");
          }

        });
        var questions = [{
            'question': 'La opresión de las corporaciones es de mayor preocupación que la opresión de los gobiernos.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Es necesario que el gobierno intervenga en la economía para proteger a los consumidores.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Cuanto más libres sean los mercados, más libre será la gente.',
            'effect': {
              'econ': -10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Es mejor mantener un presupuesto equilibrado que asegurar el bienestar para todos los ciudadanos.',
            'effect': {
              'econ': -10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'La investigación financiada con fondos públicos es más beneficiosa para las personas que dejar que la haga el mercado.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'El comercio internacional es beneficioso.',
            'effect': {
              'econ': -5,
              'dipl': 0,
              'govt': 10,
              'scty': 0
            }
          },
          {
            'question': 'De cada uno según su capacidad, a cada uno según sus necesidades.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 5
            }
          },
          {
            'question': 'Sería mejor si los programas sociales fueran abolidos a favor de la caridad privada.',
            'effect': {
              'econ': -10,
              'dipl': 0,
              'govt': 0,
              'scty': -5
            }
          },
          {
            'question': 'Se deben aumentar los impuestos a los ricos para proveer a los pobres.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'La herencia es una forma legítima de riqueza.',
            'effect': {
              'econ': -10,
              'dipl': 0,
              'govt': 0,
              'scty': -5
            }
          },
          {
            'question': 'Los servicios públicos como las carreteras y la electricidad deben ser de propiedad pública.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'La intervención gubernamental excesiva es una amenaza para la economía.',
            'effect': {
              'econ': -10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Aquellos con una mayor capacidad de pago deberían recibir una mejor atención médica.',
            'effect': {
              'econ': -10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'La educación de calidad es un derecho de todas las personas.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'Los medios de producción deberían pertenecer a los trabajadores que los usan.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Las Naciones Unidas deberían ser abolidas.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': -5,
              'scty': 0
            }
          },
          {
            'question': 'La acción militar de nuestra nación a menudo es necesaria para protegerla.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'Apoyo a las uniones regionales, como la Unión Europea.',
            'effect': {
              'econ': -5,
              'dipl': 10,
              'govt': 10,
              'scty': 5
            }
          },
          {
            'question': 'Es importante mantener nuestra soberanía nacional.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': -5,
              'scty': 0
            }
          },
          {
            'question': 'Un gobierno mundial unido sería beneficioso para la humanidad.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Es más importante mantener las relaciones pacíficas que aumentar nuestra fuerza.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Las guerras no necesitan ser justificadas a otros países.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'El gasto militar es una pérdida de dinero.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 10,
              'scty': 0
            }
          },
          {
            'question': 'La ayuda internacional es un desperdicio de dinero.',
            'effect': {
              'econ': -5,
              'dipl': -10,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Mi nación es genial.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'La investigación debe llevarse a cabo a escala internacional.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'Los gobiernos deben rendir cuentas a la comunidad internacional.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 5,
              'scty': 0
            }
          },
          {
            'question': 'Incluso cuando se protesta contra un gobierno autoritario, la violencia no es aceptable.',
            'effect': {
              'econ': 0,
              'dipl': 5,
              'govt': -5,
              'scty': 0
            }
          },
          {
            'question': 'Mis valores religiosos deberían difundirse tanto como sea posible.',
            'effect': {
              'econ': 0,
              'dipl': -5,
              'govt': -10,
              'scty': -10
            }
          },
          {
            'question': 'Los valores de nuestra nación deben difundirse tanto como sea posible.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'Es muy importante mantener la ley y el orden.',
            'effect': {
              'econ': 0,
              'dipl': -5,
              'govt': -10,
              'scty': -5
            }
          },
          {
            'question': 'La población en general toma malas decisiones.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'Los crímenes sin víctimas (como el uso de drogas) no deberían ser crímenes en absoluto.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 10,
              'scty': 0
            }
          },
          {
            'question': 'El sacrificio de algunas libertades civiles es necesario para protegernos de los actos de terrorismo.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'La vigilancia del gobierno es necesaria en el mundo moderno.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'La misma existencia del estado es una amenaza para nuestra libertad.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 10,
              'scty': 0
            }
          },
          {
            'question': 'Independientemente de las opiniones políticas, es importante ponerse del lado de su país.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': -10,
              'scty': -5
            }
          },
          {
            'question': 'Ninguna autoridad debe dejarse sin cuestionar.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 10,
              'scty': 5
            }
          },
          {
            'question': 'Un estado jerárquico es lo mejor.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'Es importante que el gobierno siga la opinión de la mayoría, incluso si es incorrecta.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 10,
              'scty': 0
            }
          },
          {
            'question': 'Cuanto más fuerte sea el liderazgo, mejor.',
            'effect': {
              'econ': 0,
              'dipl': -10,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'La democracia es más que un proceso de toma de decisiones.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 10,
              'scty': 0
            }
          },
          {
            'question': 'Las regulaciones ambientales son esenciales.',
            'effect': {
              'econ': 5,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'Un mundo mejor vendrá de la automatización, la ciencia y la tecnología.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'Los niños deben ser educados en valores religiosos o tradicionales.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': -10
            }
          },
          {
            'question': 'Las tradiciones no tienen valor por sí mismas.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'La religión debería jugar un papel en el gobierno.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': -10
            }
          },
          {
            'question': 'Las iglesias deben pagar impuestos de la misma manera que otras instituciones.',
            'effect': {
              'econ': 5,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'El cambio climático es actualmente una de las mayores amenazas para nuestra forma de vida.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'Es importante que trabajemos como un mundo unido para combatir el cambio climático.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'La sociedad era mejor hace muchos años de lo que es ahora.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': -10
            }
          },
          {
            'question': 'Es importante que mantengamos las tradiciones de nuestro pasado.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': -10
            }
          },
          {
            'question': 'Es importante que pensemos a largo plazo, más allá de nuestra esperanza de vida.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'La razón es más importante que mantener nuestra cultura.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'El uso de drogas debe ser legalizado o despenalizado.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 10,
              'scty': 2
            }
          },
          {
            'question': 'El matrimonio entre personas del mismo sexo debe ser legal.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 10,
              'scty': 10
            }
          },
          {
            'question': 'Ninguna cultura es superior a otras.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 5,
              'scty': 10
            }
          },
          {
            'question': 'El sexo fuera del matrimonio es inmoral.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -5,
              'scty': -10
            }
          },
          {
            'question': 'Si aceptamos migrantes en absoluto, es importante que se asimilen a nuestra cultura.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -5,
              'scty': -10
            }
          },
          {
            'question': 'El aborto debe prohibirse en la mayoría o en todos los casos.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': -10
            }
          },
          {
            'question': 'La propiedad de armas debe estar prohibida para aquellos sin una razón válida.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': -10,
              'scty': 0
            }
          },
          {
            'question': 'Apoyo la salud universal.',
            'effect': {
              'econ': 10,
              'dipl': 0,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'La prostitución debería ser ilegal.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': -10,
              'scty': -10
            }
          },
          {
            'question': 'Mantener los valores familiares es esencial.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': -10
            }
          },
          {
            'question': 'Perseguir el progreso a toda costa es peligroso.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': -10
            }
          },
          {
            'question': 'La modificación genética es una fuerza para el bien, incluso en los humanos.',
            'effect': {
              'econ': 0,
              'dipl': 0,
              'govt': 0,
              'scty': 10
            }
          },
          {
            'question': 'Deberíamos abrir nuestras fronteras a la inmigración.',
            'effect': {
              'econ': 0,
              'dipl': 10,
              'govt': 10,
              'scty': 0
            }
          },
          {
            'question': 'Los gobiernos deberían preocuparse tanto por los ciudadanos extranjeros como por aquellos que se encuentran dentro de sus fronteras.',
            'effect': {
              'econ': 10,
              'dipl': 10,
              'govt': 0,
              'scty': 0
            }
          },
          {
            'question': 'Todas las personas, independientemente de factores como la cultura o la sexualidad, deben recibir el mismo trato.',
            'effect': {
              'econ': 10,
              'dipl': 10,
              'govt': 10,
              'scty': 10
            }
          },
          {
            'question': 'Es importante que avancemos las metas de mi grupo sobre todas las demás.',
            'effect': {
              'econ': -10,
              'dipl': -10,
              'govt': -10,
              'scty': -10
            }
          }
        ];
        var max_econ, max_dipl, max_govt, max_scty; // Max possible scores
        max_econ = max_dipl = max_govt = max_scty = 0;
        var econ, dipl, govt, scty; // User's scores
        econ = dipl = govt = scty = 0;
        var qn = 0; // Question number
        var prev_answer = null;

        function init_question() {
          $("#question-text").html(questions[qn].question);
          $("#question-number").html("Question " + (qn + 1) + " of " + (questions.length));
          if (prev_answer == null) {
            $("#back_button").css('display', 'none');
            $("#back_button_off").css('display', 'block');
          } else {
            $("#back_button").css('display', 'block');
            $("#back_button_off").css('display', 'none');
          }

        }

        init_question();
        for (var i = 0; i < questions.length; i++) {
          max_econ += Math.abs(questions[i].effect.econ);
          max_dipl += Math.abs(questions[i].effect.dipl);
          max_govt += Math.abs(questions[i].effect.govt);
          max_scty += Math.abs(questions[i].effect.scty);
        }

        function calc_score(score, max) {
          return (100 * (max + score) / (2 * max)).toFixed(1);
        }

        function results() {
          var calc_score_econ = calc_score(econ, max_econ);
          var calc_score_dipl = calc_score(dipl, max_dipl);
          var calc_score_govt = calc_score(govt, max_govt);
          var calc_score_scty = calc_score(scty, max_scty);
          var url = 'https://mapa.southcentralus.cloudapp.azure.com/resultados.html?e=' + calc_score_econ + "&d=" + calc_score_dipl + "&g=" + calc_score_govt + "&s=" + calc_score_scty;
          window.location.href = url;
        }

        function next_question(mult) {
          econ += mult * questions[qn].effect.econ;
          dipl += mult * questions[qn].effect.dipl;
          govt += mult * questions[qn].effect.govt;
          scty += mult * questions[qn].effect.scty;
          qn++;
          prev_answer = mult;
          if (qn < questions.length) {
            init_question();
          } else {
            results();
          }
        }

        function prev_question() {
          if (prev_answer == null) {
            return;
          }
          qn--;
          econ -= prev_answer * questions[qn].effect.econ;
          dipl -= prev_answer * questions[qn].effect.dipl;
          govt -= prev_answer * questions[qn].effect.govt;
          scty -= prev_answer * questions[qn].effect.scty;
          prev_answer = null;
          init_question();

        }

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
          $.each(categoriaArray, function(i, el) {
            if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
          });
          for (var i = 0; i < uniqueNames.length; i++) {
            code_btn += "<button class='boton-candidato' id='" + uniqueNames[i] + "'>" + uniqueNames[i] + "</button>";
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
