

function displayClock() {
    let d = new Date();
    let d1 = d.getMonth() + 1 + "-" + d.getDate() + "-" + d.getFullYear();
    d1 = d1 + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.getElementById('clock').innerHTML = d1;
    refreshClock()
}

function refreshClock() {
    let refresh = 1000; //milliseconds
    mytime = setTimeout('displayClock()', refresh)
}