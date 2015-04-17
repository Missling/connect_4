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
        var cell = $("#" + i + " ."+column)
        diagonal_winner(cell)

        break;
      } //if
    } //for
  } //single_click

  var diagonal_winner = function(cell) {
    var init_column = parseInt(cell.attr('class')[0]) //+1
    var init_row = parseInt(cell.parent().attr('id')) //-1
    var color = cell.attr('class').split(" ")[1]
    if($('#'+(init_row-1)+ ' .'+(init_column+1)).hasClass(color)){
      console.log("yes!")
    } else {
      debugger
      console.log("no!")
    }
  }

  var horizontal_winner = function(cell) {
    var init_column = parseInt(cell.attr('class')[0]) //+1
    var init_row = parseInt(cell.parent().attr('id')) //-1
    var color = cell.attr('class').split(" ")[1]
    for(var i=6; i<0; i--) {
      var counter = 1
      if($('#'+i+ ' .'+(init_column)).hasClass(color){
        counter++
        if (counter > 4) {
          console.log("We got a winner")
        } else
      }
    }
  }
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
