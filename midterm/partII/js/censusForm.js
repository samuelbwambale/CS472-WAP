"use strict";
$(function() {

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

});

function displayClock() {
    let d = new Date();
    document.getElementById('clock').innerHTML = d;
    setTimeout(displayClock, 1000);

}