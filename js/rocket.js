var timer = null;
var countdownNumber = 5;

var changeState = function (state) {
  document.body.className = "body-state" + state;
  clearInterval(timer);
  countdownNumber = 5;
  document.getElementById('countdown').innerHTML = countdownNumber;

  if (state == 2) {
    timer = setInterval(function() {
      if (countdownNumber <= 1){
          changeState(3);
        }
      countdownNumber = countdownNumber - 1;
      document.getElementById('countdown').innerHTML = countdownNumber;
    }, 1000);
  } else if (state ==3) {
    var success = setTimeout(function ()
    {
      var randomNumber = Math.round(Math.random() * 10);
      console.log(randomNumber);
      // success
      if (randomNumber > 5) {
        changeState(4);
      } else {
        changeState(5);
      }
    }, 2000);
  }

}
