

$('#preorder').click(function(){
  var en = $('[name="email"]').val();
  if(isValidEmail(en)){
  $('.card').toggleClass('flipped');
  }else{
     $('[name="email"]').css('background','coral');
     $('[name="email"]').val('это не email');
  }
});

function isValidEmail(email)
{
    return /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/.test(email)
        && /^(?=.{1,64}@.{4,64}$)(?=.{6,100}$).*/.test(email);
}

function showHide(show){
  show?$('.wrapper').css('display','block'):$('.wrapper').css('display','none');
}



//$('.front').html('<h1>hello</h1>');