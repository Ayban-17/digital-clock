const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');


 function updateClock (){
    const hourDisplay = new Date().getHours();
    const minuteDisplay = new Date().getMinutes();
    const secondDisplay = new Date().getSeconds();
    hourElement.textContent = hourDisplay;
    minuteElement.textContent = minuteDisplay;
    secondElement.textContent = secondDisplay;
    setInterval(updateClock, 1000);
    console.log(new Date());
 }
 updateClock ();