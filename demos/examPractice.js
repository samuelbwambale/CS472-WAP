/* 
    examPractice.js
    @author sbwambale
 */

$(document).ready(function () {
    // $("#accountNumber").mask("00-000-0000");

    const listOfAccounts = $('#listOfAccounts');

    $("#bankAccountForm").submit(
        function (event) {
            event.preventDefault();
            const accountNumber = $('#accountNumber').val();
            const customerName = $('#customerName').val();
            const typeOfAccount = $('#typeOfAccount').val();


            // console.log("customerName " + customerName);
            const newAccount = $("<div>").css({"border": "0.5px solid", "padding": "1em"});
            newAccount.text(accountNumber + " | " + customerName + " | " + typeOfAccount);
            listOfAccounts.append(newAccount);
            listOfAccounts.css('display', 'block');

            $('#accountNumber').text();
            $('#customerName').text();
            $('#typeOfAccount').text();

            
        })
});
