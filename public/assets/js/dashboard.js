// USER DASHBOARD WITH BOX RESULTS
(()=> {

    $(".update").on("click", function(e) {
        e.preventDefault();
        let id = $(this).attr("id");
        console.log(id);
        if (id === undefined || null) {
            window.location.assign("/error");
        } else {
            window.location.assign("/update/" + id);
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
                data: { 
                    current_box: box[1],
                    bucket_id: box[2]
                }
            }).then(data => location.reload());
        }
    });

})();