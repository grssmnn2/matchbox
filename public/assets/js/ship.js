$(document).ready(function () {
    $(".submit").click(function (event) {
        if ($("#address").val() === "") {
            event.preventDefault();
            return false;
            // document.getElementsByClassName(".address").style.borderColor = "red";
        }
        if ($("#city").val() === "") {
            event.preventDefault();
            return false;
        }
        if ($("#state").val() === "") {
            event.preventDefault();
            return false;
        }
        if ($("#zip").val() === "") {
            event.preventDefault();
            return false;
        }

        // store user shipping information in an object

        var shipping = {
            address: $("#address").val().trim(),
            city: $("#city").val().trim(),
            state: $("#state").val().trim(),
            zip: $("#zip").val().trim()
        };
        console.log(shipping);

        // store user billing information in an object

        var billing = {
            baddress: $("#baddress").val().trim(),
            bcity: $("#bcity").val().trim(),
            bstate: $("#bstate").val().trim(),
            bzip: $("#bcity").val().trim()
        };

        console.log(billing);

    });

});