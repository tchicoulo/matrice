$(document).ready(function(){
    $(".fill").click(function(){
        $(".form").addClass("color");
    });

    $(".empty").click(function(){
        $(".form").removeClass("color");
    });

    $(".rond").click(function() {
      $(this).toggleClass("color");
    });

    $(".carre").click(function(){
      if ($(this).hasClass("row1") ) $(".row1").toggleClass('color');
      if ($(this).hasClass("row2") ) $(".row2").toggleClass('color');
      if ($(this).hasClass("row3") ) $(".row3").toggleClass('color');
      if ($(this).hasClass("row4") ) $(".row4").toggleClass('color');
      if ($(this).hasClass("row5") ) $(".row5").toggleClass('color');

    });

    $(".losange").click(function(){
      $(".row3, .col3").toggleClass('color');
    });

});
