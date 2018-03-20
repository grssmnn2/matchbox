(()=> {
    // url: "/user_dashboard/:id/:bucket"
    $("#update-profile").on("click", e => {
        e.preventDefault();
        let id = $("#user_id").attr("data-key");
        let bucket = $("#bucket_id").attr("data-key");
        if (id === undefined || null) {
            window.location.replace("./error.html");
        } else {
            console.log(id);
            // need an update profile page, but logic in place
            // window.location.replace("/update_profile/" + id);
        }
    });

    $(document).on("click", ".switch", function(e) {
        e.preventDefault();
        let id = $("#user_id").attr("data-key");
        let box = $(this).attr("data-dismiss").split("-");
        if (id === undefined || null) {
            window.location.replace("./error.html");
        } else {
            $.ajax("/api/users/" + id, {
                type: "PUT",
                data: { current_box: box[1] }
            }).then(data => location.reload());
        }
    });

})();