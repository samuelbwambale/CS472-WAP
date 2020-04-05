

function displayClock() {
    let d = new Date();
    let d2 = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    
    document.getElementById('clock').innerHTML = d2;
    setTimeout(displayClock, 1000);

    // refreshClock()
}

function refreshClock() {
    let refresh = 1000; //milliseconds
    mytime = setTimeout('displayClock()', refresh)
}


/*

setTimeout(function, delayMS); // arranges to call given function after given delay in ms
setInterval(function, delayMS); // arranges to call function repeatedly every delayMS ms

*/