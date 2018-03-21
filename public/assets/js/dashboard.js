// USER DASHBOARD WITH BOX RESULTS
(()=> {

    $("#update-profile").on("click", e => {
        e.preventDefault();
        let id = $("#user_id").attr("data-key");
        let bucket = $("#bucket_id").attr("data-key");
        if (id === undefined || null) {
            window.location.assign("/error");
        } else {
            return id;
            // future development: link to update form
        }
    });

    $(document).on("click", ".switch", function(e) {
        e.preventDefault();
        let id = $("#user_id").attr("data-key");
        let box = $(this).attr("data-dismiss").split("-");
        if (id === undefined || null) {
            window.location.assign("/error");
        } else {
            $.ajax("/api/users/" + id, {
                type: "PUT",
                data: { current_box: box[1] }
            }).then(data => location.reload());
        }
    });

})();