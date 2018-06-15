$(document).ready(function(){
    $(".fill").click(function(){
        $(".form").addClass("blue");
    });

    $(".empty").click(function(){
        $(".form").removeClass("blue");
    });

    $(".rond").click(function() {
      $(this).toggleClass("blue");
    });

//$(".carre").click(function() {
//  if($(this[".row 1"]).hasClass("nothing")) {
  //  $(this[".row 1"]).addClass("blue");
//  } else {
  ///  $(this[".row 1"]).removeClass("blue");
//  }
//});

$(".carre").click(function(){
  if ($(this).hasClass("row 1") ) $(".row 1").toggleClass('blue');
   else if ( $(this).hasClass('row 1') )   $(".row 2").toggleClass('blue');
   else if ( $(this).hasClass('row 1') )   $(".row 3").toggleClass('blue');
   else if ( $(this).hasClass('row 1') )   $(".row 4").toggleClass('blue');
   else if ( $(this).hasClass('row 1') )   $(".row 5").toggleClass('blue');

 });



});
