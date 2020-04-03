"use strict"

$(function () {
    // do stuff with the DOM

    /* Listen for submit on entire form */
    $("#productForm").on(
        "submit",
        function (event) {
            event.preventDefault();
            let productNumber = document.getElementById('productNumber').value;
            let quantityInStock = document.getElementById('quantityInStock').value;
            let productName = document.getElementById('productName').value;
            let supplier = document.getElementById('supplier').value;
            let price = document.getElementById('price').value;
            let date = document.getElementById('date').value;

           /*  let arr = {
                "ProductNumber": productNumber,
                "QuantityInStock": quantityInStock,
                "ProductName": productName,
                "Supplier": supplier,
                "Price": price,
                "Date": date
            };
            for (const field in arr) {
                console.log(field +": " + arr[field]);
            } */
            
           
            let txt1 = $("<p>").html(productNumber);
            let txt2 = $("<p>").html(quantityInStock);
            let txt3 = $("<p>").html(productName);
            let txt4 = $("<p>").html(supplier);
            let txt5 = $("<p>").html(price);
            let txt6 = $("<p>").html(date);
            console.log("txt6 content " + txt6.html())
            $("container").append(txt1, txt2, txt3, txt4, txt5, txt6);
        });

});
