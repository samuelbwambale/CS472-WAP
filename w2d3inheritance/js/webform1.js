"use strict"

$(function () {
    // do stuff with the DOM

    /* Listen for submit on entire form */
    $("#loginForm").on(
        "submit",
        function (event) {
            event.preventDefault();
            console.log("Email: " + document.getElementById('exampleInputEmail1').value);
            console.log("Password: " + document.getElementById('exampleInputPassword1').value);
            console.log("Website: " + document.getElementById('exampleInputWebsite').value);
        });

    /* Alternatively, listen for click on submit button */
    /* $("#login-form-submit").click(function () {
        event.preventDefault();
        console.log("Email: " + document.getElementById('exampleInputEmail1').value);
        console.log("Password: " + document.getElementById('exampleInputPassword1').value);
        console.log("Website: " + document.getElementById('exampleInputWebsite').value);
    }); */
});



