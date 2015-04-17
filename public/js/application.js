$(document).ready(function() {

  var double_click = function(current) {
    var column = $(current).attr('class');
    for (var i=6; i>0; i--){
      if ($("#" + i + " ."+column).hasClass('filled_red') || $("#" + i + " ."+column).hasClass('filled_blue')){
      } else {
        $("#" + i + " ."+column).addClass('filled_red')
        break;
      } //if
    } //for
  } //single_click

  var single_click = function(current) {
    var column = $(current).attr('class');
    for (var i=6; i>0; i--){
      if ($("#" + i + " ."+column).hasClass('filled_blue') || $("#" + i + " ."+column).hasClass('filled_red')){
      } else {
        $("#" + i + " ."+column).addClass('filled_blue')
        // var cell = $("#" + i + " ."+column))
        // winner(cell)
        break;
      } //if
    } //for
  } //single_click

  // var winner = function(cell) {
  //   var vertical_check = function(cell) {
  //     var horizontalCheck = function(){
  //       for (var i=0; i<5; i++){
  //         var row = $("#" + i + " ."+column)
  //         if // row of 4
  //       }
  //     }
  //   }

  // } //winner

  var DELAY = 300, clicks = 0, timer = null;
  $("td").on("click", function(e){
    var current = this
    clicks++;  //count clicks
      if(clicks === 1) {
        timer = setTimeout(function() {
          single_click(current);
          clicks = 0;             //after action performed, reset counter
          }, DELAY);
      }
      else {
        clearTimeout(timer);    //prevent single-click action
        double_click(current);
        clicks = 0;
      }
  })
    .on("dblclick", function(e){
        e.preventDefault();  //cancel system double-click event
      });
});
