var messagesRef = new Firebase('https://flickering-torch-7844.firebaseio.com');

$('#hour').hide();
$('#master').hide();
$('#finish').hide();
$('#thankyou').hide();
$('#menu').hide();
$('#friends').hide();

$('#school').hide();
$('#answer').hide();
$('#CONTACT').hide();
$('#blog').hide();
$('#events').hide();
$('#FAQ').hide();

var changing = 0;
var TIMER = true; var TIME;
var HelpLoading = true; var HelpLoading2 = true; var HelpLoading3 = true;
var problems = ['сдох кот?','сессия?','бросила девушка?','выгнали из дома?','не хватает времени на чтение?','холодильник пуст?'];



//$('#two_buttons').prepend("<h1>hello</h1>");

function adding_prev(src,id)
{
  return '<img class="draw" src='+src+' id='+id+'/>';
}

var $button = adding_prev("first/button.gif", "025483");
var $anyone = adding_prev("first/anyone.gif", "025484");
var $motivation = adding_prev("first/motivation.gif", "025485");
var $menu = adding_prev("first/menu.gif", "025486");
var $heart = adding_prev("first/heart.gif", "025487");
var $mark = adding_prev("first/mark.gif", "025488");
// $("#hello").css('left','-500px');

$($button)
.css('left','0px')
.appendTo('#two_buttons');
$($anyone)
.css('left','100px')
.appendTo('#two_buttons');
$($motivation)
.css('top','100px')
.appendTo('#smalltext');
$($menu)
.css('top','0px')
.css('left','100px')
.appendTo('#MENU');
$($heart)
.css('top','-100px')
.css('left','0px')
.prependTo('#heart');
$($mark)
.css('top','-100px')
.css('left','-200px')
.prependTo('#heart');

TIME = new Date();



// adding_prev( '#two_buttons' , "first/anyone.gif" ,['-200px']);
// adding_prev( '#smalltext' , "first/motivation.gif" ,['-100px']);

$(window).mousemove(function(e) {
    var nn = new Date();
    //return $('#c').text("posX:" + e.pageX + " posY:" + e.pageY);
    if (e.pageY<100)
    $('#bigQ').text( problems[Math.floor(Math.random()*problems.length)] );
    if (nn - TIME > 2000 & TIMER){
      TIMER = false;
      $('.draw').remove();
    }
  });

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
    $('#footer').hide();
    $('#friends').hide();
    $('.jumbotron').addClass('blur');
    $('body').css('overflow','hidden');
  }else{
    $('#menu').hide(200);
    $('#footer').show();
    $('.jumbotron').removeClass('blur');
    $('body').css('overflow','auto');
  }

  changing = 1 - changing;

}
function loadblog(loaded)
{
  if(loaded){
    HelpLoading = false;
    ($.ajax({url: 'data/file.json', //http://arsenicum32.github.io/blog1/
             success: function (obj) { //var obj = jQuery.parseJSON(data);
            for ( var i =0; i< obj.wr.length ; i++)
                {
                  $('#listofblog').append('<li class="list-group-item"><h3>'
                  +obj.wr[i].h3+'<small>'
                  +obj.wr[i].small
                  +'</small></h3><span class="label label-danger" href='+obj.wr[i].html+' >читать</span><small>'
                  +obj.wr[i].des+'</small></li>');
                }
          }})

  );
  }

}
function FAQload(loaded)
{
  if(loaded){
    HelpLoading2 = false;
    ($.ajax({url: 'data/faq.json', //http://arsenicum32.github.io/blog1/
             success: function (obj) { //var obj = jQuery.parseJSON(data);
            for ( var i =0; i< obj.wr.length ; i++)
                {
                  $('#FAQpanel').append('<div class="panel-heading"><h3 class="panel-title">'
                  +obj.FAQ[i].ask+'</h3></div><div class="panel-body">'
                  + obj.FAQ[i].answer +'</div>');
                }
          }})

  );
  }
}
function loadevents(loaded)
{
  if(loaded){
    HelpLoading2 = false;
    ($.ajax({url: 'data/events.json', //http://arsenicum32.github.io/blog1/
             success: function (obj) { //var obj = jQuery.parseJSON(data);
            for ( var i =0; i< obj.wr.length ; i++)
                {
                  $('#eventsmaster').append('<div class="thumbnail"><img data-src="holder.js/300x200" src='+
                    obj.events[i].src+'><div class="caption"><h3>'+
                    obj.events[i].name+'</h3><p><span class="glyphicon glyphicon-map-marker"></span>'+
                    obj.events[i].place+'</p><p><span class="glyphicon glyphicon-time"></span>'+
                    obj.events[i].time+'</p><p><span class="glyphicon glyphicon-calendar"></span>'+
                    obj.events[i].date+'</p><p>'+
                    obj.events[i].description+'</p><p><a href='+
                    obj.events[i].link+' class="btn btn-primary" role="button">подробнее</a></p></div></div>'
                  );
                }
          }})

  );
  }
}

// function generatehtml(innering)
// {
//   $('#blog').html(innering);
// }

function listmenu( $me )
{
  $('#school').hide();
  $('#answer').hide();
  $('#CONTACT').hide();
  $('#blog').hide();
  $('#events').hide();
  $('#FAQ').hide();
  $('#first').hide();
  $('#finish').hide();
  $('#thankyou').hide();
  $('#hour').hide();
  $('#master').hide();
  $me.show();
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
  var perz = ['проеду пару метров','умею проехать задом','прыгаю с метровой высоты успешно','спокойно стою на месте','не падаю, когда просто катаюсь','кручусь на месте в течении минуты','прыгаю в длину на метр','гуру'];
  var perzM = ['минимально','пару часиков','два-три часа','четыре или шесть','от шести до восьми','готов заниматься каждый день','столько, сколько нужно','главное - скорость обучения'];
  $('#Sact').text( perz[ $('#Ssen').val()]);
  $('#Mact').text( perzM[ $('#Msen').val()]);
};
