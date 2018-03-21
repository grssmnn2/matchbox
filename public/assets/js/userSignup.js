console.log("we are linked");
$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form");
    var emailInput = $("input#inputEmail");
    var passwordInput = $("input#inputPass");
    var firstNameInput = $("#inputFirstName");
    var lastNameInput = $("#inputLastName");
    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
      event.preventDefault();
      var user = {
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

      console.log(user);
  
      if (!user.email || !user.password) {
        return;
      }
      // If we have an email and password, run the signUpUser function
      signUpUser(user.email, user.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(email, password) {
      $.post("/api/users", {
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  