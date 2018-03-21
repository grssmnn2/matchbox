// CREATE NEW USER FROM SIGNUP PAGE
(()=>{

  // ===================================================
  // =========== confirm passwords match ===============
  // ===================================================
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

  // ===================================================
  // =========== billing same as shipping ==============
  // ===================================================
  $("#billingCheckbox").on("click", function() {	
      if ($('input[name="checkbox"]').is(":checked")) {	
          $("#billing").hide();	
          $('.bill').prop('required', false);	
      } else {	
          $("#billing").show();
          $('.bill').prop('required', true);	
      }		
  });

  // ===================================================
  // =========== add new user to database ==============
  // ===================================================
  $("form").on("submit", event => {
    event.preventDefault();

    var user = {
      firstName: $("#inputFirstName").val().trim(),
      lastName: $("#inputLastName").val().trim(),
      email: $("input#inputEmail").val().trim(),
      password: $("input#inputPass").val().trim(),
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
    }

    if (!user.email || !user.password) { return };
    signUpUser(user);
  });

  function signUpUser(data, err) {
    $.post("/api/users", data).then(data => {
        let id = data.id;
        let bucket_id = data.bucket_id;
        window.location.assign(`/user_dashboard/${id}/${bucket_id}`);
      }).catch(handleLoginErr);
  };
  
  function handleLoginErr(err) {
    window.location.assign("/error");
  };

})(); // end of IIFE
