function countdown(endDate) {
  let timer, days, hours, minutes, seconds;
  
  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
    return;
  }
  
  timer = setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    
    startDate = new Date(startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate(),
      startDate.getUTCHours(),
      startDate.getUTCMinutes(),
      startDate.getUTCSeconds());
    
    let timeRemaining = parseInt((endDate - startDate.getTime()) / 1000);

    if (timeRemaining >= 0) {
      days            = parseInt(timeRemaining / 86400);
      timeRemaining   = (timeRemaining % 86400);

      hours           = parseInt(timeRemaining / 3600);
      timeRemaining   = (timeRemaining % 3600);

      minutes         = parseInt(timeRemaining / 60);
      timeRemaining   = (timeRemaining % 60);

      seconds         = parseInt(timeRemaining);

      document.getElementById("days").innerHTML    = parseInt(days, 10);
      document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

(function () { 
  countdown('04/01/2333 05:00:00 PM'); 
}());