//you see your base in :
// https://wuv188aaem9.firebaseio-demo.com


// session:  https://www.firebase.com/tutorial/#session/wuv188aaem9

var myDataRef = new Firebase('https://flickering-torch-7844.firebaseio.com/');
 myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        //document.writeln(snapshot.val().chat);
        displayChatMessage(message.want, message.likeidea,message.user_info,message.social,message.skill);
      });

//alert($.now())
function displayChatMessage(want, like,info,soc,skill){
//$('<div/>').html('<h1>'+like+'</h1>' + ' '+want+' '+info+' '+soc)
        //$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  var infoN = info.split(' ');
  var color='';
  var wanted = want;
  if (like!='хочу'){
    color='style="color:red"';
    wanted=skill;
  }
  //var d = new Date($.trim(infoN[0])).toLocaleTimeString();
  //alert($.trim(infoN[0]));
  $('<li/>').html('<a class="expand" href=http://'+soc+' target="_blank"><div class="icon" style='+'background:url("http://placehold.it/50x50") top left no-repeat;'+'></div><h2 '+color+' >'+like+'</h2>'+wanted+'<p style="font-size:50%;float:right">c '+infoN[1]+' в  '+formatTimeOfDay(infoN[0])+'</p>'+'</div>').appendTo($('#messagesDiv'));
      };

function formatTimeOfDay(millisSinceEpoch) {
  var secondsSinceEpoch = (millisSinceEpoch / 1000) | 0;
  var secondsInDay = ((secondsSinceEpoch % 86400) + 86400) % 86400;
  var seconds = secondsInDay % 60;
  var minutes = ((secondsInDay / 60) | 0) % 60;
  var hours = (secondsInDay / 3600) | 0;
  return hours + (minutes < 10 ? ":0" : ":")
      + minutes + (seconds < 10 ? ":0" : ":")
      + seconds;
}

