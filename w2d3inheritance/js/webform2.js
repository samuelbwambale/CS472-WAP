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

            const obj = {
                "ProductNumber": productNumber,
                "QuantityInStock": quantityInStock,
                "ProductName": productName,
                "Supplier": supplier,
                "Price": price,
                "Date": date
            };
            for (const key in obj) {
                const txt = $("<p>").text(key + ": " + obj[key]);
                $("#divProductData").append(txt);
                console.log(key +": " + obj[key]);

            }
            $('#divProductData').css('display', 'block');
            
        });

});

// $(document).ready(function() {
//     $("#productForm").submit(
//         function (event) {
//             event.preventDefault();
//             const productNumber = $('#productNumber').val();
//             const productName = $('#productName').val();
//             const price = $('#price').val();
//             const quantityInStock = $('#quantityInStock').val();
//             const supplier = $('#supplier').val();
//             const date = $('#date').val();

//             const divProductData = $('#divProductData');

//             console.log("productName " + productName);
//             $('#pProductNumber').text("Product Number: " + productNumber);
//             $('#pProductName').text("Product Name: " + productName);
//             $('#pUnitPrice').text("Unit Price: " + price);
//             $('#pQuantityInStock').text("Quantity: " + quantityInStock);
//             $('#pSupplier').text("Supplier: " + supplier);
//             $('#pDate').text("Date: " + date);

//             divProductData.css('display', 'block');
//         })
// })
