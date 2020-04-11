"use strict"

function printDetails(e) {
    e.preventDefault();
    let customerName = document.getElementById('customerName').value;
    let gender = document.getElementById('gender').value;
    let category = document.getElementById('category').value;
    let message = document.getElementById('message').value;

    console.log("customerName " + customerName + " gender " + gender + 
    " category " +  category  + " message " + message);

    /* let arr = {
        "ProductNumber": productNumber, 
        "QuantityInStock": quantityInStock, 
        "ProductName": productName, 
        "Supplier": supplier, 
        "Price": price, 
        "Date": date
    };

        for(const label in arr) {
        alert(label + ': ' + arr[label]);
    } */
}

function reset() {
    document.getElementById('productForm').reset();
}


// document.getElementById("loginForm").addEventListener(
//     "submit",
//     function(event) {
//         event.preventDefault();
//         console.log(document.getElementById('exampleInputEmail1').value);
//         console.log(document.getElementById('exampleInputPassword1').value);
//         console.log(document.getElementById('exampleInputWebsite').value);

//     }
// );