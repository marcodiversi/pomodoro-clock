$(document).ready(function() {
  var audio = $('#sound')[0];
  // we want an integer
  var workT = parseInt($('#workT').html());
  var breakT = parseInt($('#breakT').html());

  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    workT *= 60;

    function timer() {
      workT -= 1;
      if (workT === 0) {
        audio.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
          breakT *= 60;
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
    window.location.reload();
  });
  $('#lessBreak').on('click', function() {
    if (breakT > 1) {
      breakT -= 1;
    }
    $('#breakT').html(breakT);
  });
  $('#moreBreak').on('click', function() {
    breakT += 1;
    $('#breakT').html(breakT);
  });
  $('#lessWork').on('click', function() {
    if (workT > 5) {
      workT -= 5;
    }
    $('#workT').html(workT);
  });
  $('#moreWork').on('click', function() {
    workT += 5;
    $('#workT').html(workT);
  });
  /////// end out of functions stuff !!
});
