"use strict"

$(document).ready(function () {
    // do stuff with the DOM

    /* Listen for submit on entire form */
    $("#loginForm").on(
        "submit",
        function (event) {
            event.preventDefault();
            console.log("Email: " + $('#exampleInputEmail1').val());
            console.log("Password: " + $('#exampleInputPassword1').val());
            console.log("Website: " + $('#exampleInputWebsite').val());
        });

    /* Alternatively, listen for click on submit button */
    /* $("#login-form-submit").click(function () {
        event.preventDefault();
        console.log("Email: " + $('#exampleInputEmail1').val());
        console.log("Password: " + $('#exampleInputPassword1').val());
        console.log("Website: " + $('#exampleInputWebsite').val());
    }); */
});



