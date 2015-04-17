$(document).ready(function() {

  var double_click = function(current) {
    var column = $(current).attr('class');
    for (var i=6; i>0; i--){
      if ($("#" + i + " ."+column).hasClass('filled_red') || $("#" + i + " ."+column).hasClass('filled_blue')){
      } else {
        $("#" + i + " ."+column).addClass('filled_red')
        winner();
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
        winner();
        break;
      } //if
    } //for
  } //single_click

   //winner

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


var winner = function(){






  // var column =$(this).attr('id=y_index');
  var y_index = 1
  var x_index = 1
  var count_blue = 0
  var count_red = 0

  while (y_index < 7){

    while (x_index < 8) {

      var current_position = $('tr#' + x_index + " ." + y_index);

      if (current_position.hasClass('filled_blue')){
          count_blue++;
          count_red = 0
          x_index += 1
        } else if (current_position.hasClass('filled_red')){
          count_red++;
          count_blue = 0
          x_index += 1
        } else if (current_position.hasClass('filled_red') === false || current_position.hasClass('filled_blue') === false) {
          count_red = 0;
          count_blue = 0
          x_index += 1
      };
    }


        if (count_blue === 4) {
          alert("Blue Wins!")
          break;
        } else if (count_red === 4) {
          alert("Red Wins!")
          break;
        } else {
            y_index += 1
            x_index = 0
    }      // debugger
  }
});












