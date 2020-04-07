"use strict";
$(function() {

    displayClock();

    let counter = 0;
    $("#censusForm").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let citizenId = $("#citizenId").val();
        let ssn = $("#ssn").val();
        let state = $("#state").val();
        let isSenior = $("input[name='senior']:checked").val();

        counter = counter + 1;
        let displayTable = $("#displayTableInfo");
        $("#tbody").append(
            "<tr><th scope='row'> " + counter + " </th><td>" +
            citizenId + "</td><td>" +
            ssn + "</td><td>" +
            name + "</td><td>" +
            state + "</td><td>" +
            isSenior + "</td></tr>"
        );
        displayTable.css("display", "block");
    });

    function displayClock() {
        let d = new Date();
        let year = d.getFullYear();
        let date = d.getDate();
        date = date < 10 ? "0"+date : date;
        let minutes = d.getMinutes();
        minutes = minutes < 10 ? "0"+minutes : minutes;
    
        let seconds = d.getSeconds();
        seconds = seconds < 10 ? "0"+seconds : seconds;
    
        let months = new Array();
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";
        let month = months[d.getMonth()];
    
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let dayOfWeek = weekday[d.getDay()];
    
        let hours = d.getHours();
        let amOrPm = (hours < 12) ? "AM" : "PM";
        let hour = (hours < 12) ? hours : hours - 12;
        hour = hour < 10 ? "0"+hour : hour;
    
        // Monday, 6 April 2020 - 08:21:37 AM
        let d2 = `${dayOfWeek},  ${date} ${month} ${year} - ${hour}:${minutes}:${seconds} ${amOrPm}`
        console.log("date today " , d2)
    
        document.getElementById('clock').innerHTML = d2;
        setTimeout(displayClock, 1000);
    
    }

    
    

});

