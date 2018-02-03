/* Plugin de Slide */

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});


$(".rslides-portifolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});

//Javascript para comunicação com Backend

// Formulario

$('.formphp').on('submit', function() {
  var emailContato = ""; // Escreva aqui o seu e-mail

  var that = $(this),
  url = that.attr('action'),
  type = that.attr('method'),
  data = {};
  
  that.find('[name]').each(function(index, value) {
    var that = $(this),
    name = that.attr('name'),
    value = that.val();
    
    data[name] = value;
  });
  
  $.ajax({
    url: url,
    type: type,
    data: data,
    success: function(response) {
      
      if( $('[name="leaveblank"]').val().length != 0 ) {
        $('.formphp').html("<div id='form-erro'></div>");
        $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
        .hide()
        .fadeIn(1500, function() {
          $('#form-erro');
        });
      } else {
        
        $('.formphp').html("<div id='form-send'></div>");
        $('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
        .hide()
        .fadeIn(1500, function() {
          $('#form-send');
        });
      };
    },
    error: function(response) {
      $('.formphp').html("<div id='form-erro'></div>");
      $('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
      .hide()
      .fadeIn(1500, function() {
        $('#form-erro');  
      });
    }
  });
  
  return false;
});