var counterSec = 59;
var counterMin = 24;
var intervalId = null;





function bip()
{
  document.getElementById("bip").innerHTML = counterMin + 'm' + counterSec + " temps restant";
  counterSec--;
  if ( counterSec < 1 ) {
    counterMin--;
    counterSec= 59;
  };
  
}

function stop()
{
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = counterMin + 'm' + counterSec + " temps restant" + " " + "</br> Une pause serait la bienvenue ;)!";  
}

function start()
{
  intervalId = setInterval(bip, 1000);
  setTimeout(action, counterSec * 1000 + 1000*60*counterMin);

} 

function reset () {
  document.getElementById("bip").innerHTML = 25;
  clearInterval(intervalId);
}