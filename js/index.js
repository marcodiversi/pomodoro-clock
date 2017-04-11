$(document).ready(function() {


  var audio  = $('#sound')[0] , counter, startBreak;


  $("#start").click(function() {

    // setInterval() won't stop if it gets called twice
    // so we cleare old interval and start new one

    // cleare old interval if exist
      clearInterval(counter);
      clearInterval(startBreak);

    // get current user define value
    var workT  = parseInt($('#workT').html());
    var breakT = parseInt($('#breakT').html());
    
    // break time alert hide
      $("#breakTimeAlert").hide();

    // update work time
      workT *= 60;

    
    if (workT % 60 >= 10) {

      $("#timer").html(Math.floor(workT / 60) + ":" + workT % 60);
    } else {

      $("#timer").html(Math.floor(workT / 60) + ":" + "0" + workT % 60);
    }

    counter = setInterval( timer, 1000);

    function timer() {

      workT -= 1;

      if (workT === 0) {

        audio.play();
        
        clearInterval(counter);
        startBreak = setInterval(breakTimer, 1000);

        breakT *= 60;

        if (breakT % 60 >= 10) {

          $("#timer").html(Math.floor(breakT / 60) + ":" + breakT % 60);
        } else {

          $("#timer").html(Math.floor(breakT / 60) + ":" + "0" + breakT % 60);
        }

        $("#breakTimeAlert").show();
      } else if (workT % 60 >= 10) {

        $("#timer").html(Math.floor(workT / 60) + ":" + workT % 60);
      } else {

        $("#timer").html(Math.floor(workT / 60) + ":" + "0" + workT % 60);
      } 

      function breakTimer() {

        breakT -= 1;
        if (breakT === 0) {

          audio.play();
          clearInterval(startBreak);
          $("#timer").html("00:00");
          $("#breakTimeAlert").hide();
        } else if (breakT % 60 >= 10) {

          $("#timer").html(Math.floor(breakT / 60) + ":" + breakT % 60);
        } else {
          $("#timer").html(Math.floor(breakT / 60) + ":" + "0" + breakT % 60);
        } 
      }
    }
  });
  /////// out of functions stuff !!

  $("#reset").click(function() {

    
    $('#breakT').html('5');
    $('#workT').html('25');
    $('#timer').html('25:00');
    $("#breakTimeAlert").hide();

    clearInterval(counter);
    clearInterval(startBreak);
    // window.location.reload();
  });
  $('#lessBreak').on('click', function() {
    var breakT = parseInt($('#breakT').html());
    if (breakT > 1) {

      breakT -= 1;
    }
    $('#breakT').html(breakT);
  });
  $('#moreBreak').on('click', function() {

    var breakT = parseInt($('#breakT').html());
    
    breakT += 1;
    $('#breakT').html(breakT);
  });
  $('#lessWork').on('click', function() {
    var workT  = parseInt($('#workT').html());
    if (workT > 5 ) {
      $('#timer').html(workT-5 +':00');
      workT -= 5;
    }
    $('#workT').html(workT);
  });
  $('#moreWork').on('click', function() {
    var workT  = parseInt($('#workT').html());
    $('#timer').html(workT+5 +':00');
    workT += 5;
    $('#workT').html(workT);
  });
  /////// end out of functions stuff !!
});