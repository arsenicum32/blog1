var SI=0;
//var con_s=1;
var scroll = function(con){
  if(con_s){
  SI+=1;
if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {           
            window.scrollTo(200,SI) // first value for left offset, second value for top offset
}else{
  //window.scrollTo(200,SI);
            $('html,body').animate({
               scrollTop: SI,
               scrollLeft: 0
           }, 800, function(){
               $('html,body').clearQueue();
           });
}}}

//setInterval(scroll,10);

//for(var n=0;n<11;n++){
//  document.getElementById((n).toString()).style.background = 'rgb('+n*25.5+',51,51)';
//}