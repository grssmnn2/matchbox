$(document).ready(function() {
 
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

  $("form").on("submit", function(event) {
    event.preventDefault()
    var user = {
      firstName: $("#inputFirstName")
        .val()
        .trim(),
      lastName: $("#inputLastName")
        .val()
        .trim(),
      email: $("input#inputEmail")
        .val()
        .trim(),
      password: $("input#inputPass")
        .val()
        .trim(),
      bucket_id: localStorage.getItem("matchBox_bucket_id"),
      ship_add1: $("#inputAddress")
        .val()
        .trim(),
      ship_add2: $("#inputAddress2")
        .val()
        .trim(),
      ship_city: $("#inputCity")
        .val()
        .trim(),
      ship_state: $("#inputState")
        .val()
        .trim(),
      ship_zip: $("#inputZip")
        .val()
        .trim(),
      bill_add1: $("#bAddress")
        .val()
        .trim(),
      bill_add2: $("#bAddress2")
        .val()
        .trim(),
      bill_city: $("#bCity")
        .val()
        .trim(),
      bill_state: $("#bState")
        .val()
        .trim(),
      bill_zip: $("#bZip")
        .val()
        .trim()
    }

    console.log(user)
  
 

    if (!user.email || !user.password) {
      return
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(user)
    // emailInput.val("");
    // passwordInput.val("");
  })

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(data, err) {
    $.post("/api/users", data)
      .then(function(data) {
        let id = data.body.id;
        let bucket_id = data.body.bucket_id;
        // window.location.replace(data);
        // If there's an error, handle it by throwing up a boostrap alert
        // window.location.replace("./error.html");
        window.location.replace(`./user_dashboard/${id}/${bucket_id}`);
        console.log("redirect");
      })
      .catch(handleLoginErr)
  }

  function handleLoginErr(err) {
    // $("#alert .msg").text(err.responseJSON);
    // $("#alert").fadeIn(500);
    window.location.replace("./error.html")
  }
})
