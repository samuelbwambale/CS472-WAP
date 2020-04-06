
"use strict"

function displayClock() {
    let d = new Date();
    document.getElementById('clock').innerHTML = d;
    setTimeout(displayClock, 1000);

}