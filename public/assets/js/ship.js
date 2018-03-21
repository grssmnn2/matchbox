var db = require("../models");

$(document).ready(function () {
    $(".submit").click(function (event) {
        // grab newUser information 
        var newUser = {
            firstName: $("#inputFirstName").val().trim(),
            lastName: $("#inputLastName").val().trim(),
            email: $("#inputEmail").val().trim(),
            password: $("#inputPass").val().trim(),
            bucket_id: localStorage.getItem("matchBox_bucket_id"),
            ship_add1: $("#inputAddress").val().trim(),
            ship_add2: $("#inputAddress2").val().trim(),
            ship_city: $("#inputCity").val().trim(),
            ship_state: $("#inputState").val().trim(),
            ship_zip: $("#inputZip").val().trim(),
            bill_add1: $("#bAddress").val().trim(),
            bill_add2: $("#bAddress2").val().trim(),
            bill_city: $("#bCity").val().trim(),
            bill_state: $("#bState").val().trim(),
            bill_zip: $("#bZip").val().trim()
        };
        console.log(newUser);

    });

    // confirm user password
    var inputPass = document.getElementById("inputPass")
        , confirmPass = document.getElementById("confirmPass");

    function validatePassword() {
        if (inputPass.value != confirmPass.value) {
            event.preventDefault();
            confirmPass.setCustomValidity("Passwords Don't Match");

        } else {
            confirmPass.setCustomValidity('');
        }
    }

    inputPass.onchange = validatePassword;
    confirmPass.onkeyup = validatePassword;

});