$(document).ready(function () {
    $(".submit").click(function (event) {
        
        // grab newUser information 
        var newUser = {
            firstName: $("#inputFirstName").val().trim(),
            lastName: $("#inputLastName").val().trim(),
            email: $("#inputEmail").val().trim(),
            password: $("#inputPass").val().trim(),
            address: $("#inputAddress").val().trim(),
            address2: $("#inputAddress2").val().trim(),
            city: $("#inputCity").val().trim(),
            state: $("#inputState").val().trim(),
            zip: $("#inputZip").val().trim()
        };
        console.log(newUser);

        // store user billing information
        var billing = {
            baddress: $("#bAddress").val().trim(),
            baddress2: $("#bAddress2").val().trim(),
            bcity: $("#bCity").val().trim(),
            bstate: $("#bState").val().trim(),
            bzip: $("#bZip").val().trim()
        };

        console.log(billing);

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