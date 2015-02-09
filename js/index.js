//$('.icon').click(function(){
//  $(this).toggleClass('icon-pause');
//  $(this).toggleClass('icon-play');
//  con_s=!con_s;
//});


var con_s=0;
var shwcrd=false;


var writer='';
var text = 'hellosg';

function writeText(text){
  writer+=text[writer.length];
  if(writer.length == text.length || writer.length>2000){
    clearInterval(timeout);
  }
  $('#wr').html(writer);
}
$('#dkey').click(function(){
  writer+="д";
  $("#wr").html(writer);
});
$('#akey').click(function(){
  writer+="a";
  $("#wr").html(writer);
});

var timeout = setInterval('writeText("надоело печатать на клавиатуре?<br>надоела клавиатура вообще?")', 180);

$('.icon').click(function(){shwcrd=!shwcrd;showHide(shwcrd);});



setInterval(scroll,10);

showHide(shwcrd);



//setInterval(alert('hi'),5000);
//<!--><kbd>⌘</kbd><kbd>⌥</kbd><kbd>→</kbd>