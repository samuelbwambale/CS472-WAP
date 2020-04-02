"use strict"

function printDetails(e) {
    e.preventDefault();
    let productNumber = document.getElementById('productNumber').value;
    let quantityInStock = document.getElementById('quantityInStock').value;
    let productName = document.getElementById('productName').value;
    let supplier = document.getElementById('supplier').value;
    let price = document.getElementById('price').value;
    let date = document.getElementById('date').value;

    let arr = {
        "ProductNumber": productNumber, 
        "QuantityInStock": quantityInStock, 
        "ProductName": productName, 
        "Supplier": supplier, 
        "Price": price, 
        "Date": date};

        for(const label in arr) {
        alert(label + ': ' + arr[label]);
    }
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