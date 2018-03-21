// HANDLES LOGINS FOR EXISTING CUSTOMERS
(() => {
  $(document).ready(() => {
  
    // =======================================
    // ======== were values entered? =========
    // =======================================
    $("form").on("submit", event => {
      event.preventDefault();
      var userData = {
        email: $("input#inputEmail").val().trim(),
        password: $("input#inputPass").val().trim()
      };
      // making sure input forms were not left blank
      if (!userData.email || !userData.password) {
        alert("Please enter a valid email address and password.")
      } else {
        // continue process with database call
        loginUser(userData.email, userData.password);
        // reset form
        $("#login")[0].reset();
      }
    });

    // =======================================
    // ===== are the credentials valid? ======
    // =======================================    
    function loginUser(email, password) {
      $.post("/api/users/login", {
          email: email,
          password: password
      }).then(data => {
        let id = data.id;
        let bucket_id = data.bucket_id;
        window.location.assign(`/user_dashboard/${id}/${bucket_id}`);
      }).catch(err => {
        $("#login-failed").html(`<p>Invalid email or password. Please try again.</p><hr class="orange-line">`);
      });
    }
  
  });
})();