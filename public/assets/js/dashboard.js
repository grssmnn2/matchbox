// USER DASHBOARD WITH BOX RESULTS
(()=> {

    // ===================================================
    // ========== switch current subscription ============
    // ===================================================
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

    // ===================================================
    // =========== redirect to update form ===============
    // ===================================================
    $(".update").on("click", function(e) {
        e.preventDefault();
        let id = $(this).attr("id");
        if (id === undefined || null) {
            window.location.assign("/error");
        } else {
            window.location.assign("/update/" + id);
        }
    });

    // ===================================================
    // ============ update user in database ==============
    // ===================================================
    $("form#updateUser").on("submit", function(event) {
        event.preventDefault();
        let id = $(this).attr("data-userId");
        let bucket = $(this).attr("data-bucketId");
        console.log(id);
        let updatedInfo = {
            firstName: $("#inputFirstName").val().trim(),
            lastName: $("#inputLastName").val().trim(),
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
        
        $.ajax({
            type: 'PUT',
            url: "/api/users/" + id,
            data: updatedInfo
        }).then(data => {
            window.location.assign(`/user_dashboard/${id}/${bucket}`);
        }).catch(err => window.location.assign("/error"));

    });

})();