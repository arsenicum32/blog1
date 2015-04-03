var messagesRef = new Firebase('https://flickering-torch-7844.firebaseio.com');

$('#hour').hide();
$('#master').hide();
$('#finish').hide();
$('#thankyou').hide();
$('#menu').hide();
$('#friends').hide();

var changing = 0;

//$('body').scrollspy({ target: '.jumbotron' });

$('#want').click(function(){
  $('#first').hide();
  $('#hour').show();
  $('#CAN').val('хочу');
})
$('#can').click(function(){
  $('#first').hide();
  $('#master').show();
  $('#CAN').val('умею');
})
 if($(window).width()<400){
  $('#bigQ').css('font-size','250%');
  //$('#bigQ').replaceWith("<h1 id='bigQ'>Хотите кататься на <a onclick='showuni()'>уницикле</a>?</h1>");
 }
function menunav()
{
  if(!changing)
  {
    $('#menu').show(200);
    $('.jumbotron').addClass('blur');
    $('body').css('overflow','hidden');
  }else{
    $('#menu').hide(200);
    $('.jumbotron').removeClass('blur');
    $('body').css('overflow','auto');
  }

  changing = 1 - changing;

}
function back(){
  $('#hour').hide();
  $('#master').hide();
  $('#first').show();
}
function thankyou(){
  $('#finish').hide();
  $('#thankyou').show();
}

function next(){
  $('#hour').hide();
  $('#master').hide();
  $('#first').hide();
  $('#finish').show();
  //$('#social2').val($('#profile').val());
}

function friends()
{
  $('#friends').show(200);
}
//btn-success
function showuni(){
  $("#me").remove();
  var $n = $('<div id="me"></div>');
  $n.css('top',$(window).scrollTop());
  $('body').append($n);
  $($n).animate({
    opacity: 0,
    left: "+=100vw",
    top: Math.random()*500
    //height: "toggle"
  }, {
    duration: 5000,
    specialEasing: {
      width: "Bounce",
      height: "easeOutBounce"
    }}, function() {
    // Animation complete.
    $(this).remove();
  });
}
function sucsess(){
  $('#submit').removeAttr( "disabled");
  $('#submit').addClass('btn-success');
}

function go(){
  var info = $.now()+' '+navigator['platform']+' src:'+screen['width']+'x'+screen['height'];
  if($('#CAN').val()=='хочу'){
    messagesRef.push({user_info:info,likeidea:$('#CAN').val(), want:$('#Mact').text(),social:$('#profile').val()});
  }else{
    messagesRef.push({user_info:info,likeidea:$('#CAN').val(), skill:$('#Sact').text(),social:$('#profile').val()});
  }

}
//range in master
//$('#Ssen').on( "slidechange", function(event, ui) {
//  $('#Sact').text($('#Ssen').val());
//})

var hi = function(){
  var perz = ['проеду пару метров','умею проехать задом','прыгаю с метровой высоты успешно','спокойно стою на месте','не падаю, когда просто катаюсь','кручусь на месте в течении минуты','прыгаю в длинну на метр','гуру'];
  var perzM = ['минимально','пару часиков','два-три часа','четыре или шесть','от шести до восьми','готов заниматься каждый день','столько, сколько нужно','главное - скорость обучения'];
  $('#Sact').text( perz[ $('#Ssen').val()]);
  $('#Mact').text( perzM[ $('#Msen').val()]);
};
