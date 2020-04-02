"use strict"

// function printDetails(e) {
//     e.preventDefault();
//     let email = document.getElementById('exampleInputEmail1').value;
//     let password = document.getElementById('exampleInputPassword1').value;
//     let website = document.getElementById('exampleInputWebsite').value;
//     console.log("Email: " + email);
//     console.log("Password: " + password);
//     console.log("Website: " + website);
// }

// better to listen for submit event not just click
document.getElementById("loginForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        console.log(document.getElementById('exampleInputEmail1').value);
        console.log(document.getElementById('exampleInputPassword1').value);
        console.log(document.getElementById('exampleInputWebsite').value);

    }
);