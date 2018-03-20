(()=> {
    // "/user_dashboard/:id/:bucket?"
    $("#update-profile").on("click", e => {
        e.preventDefault();
        let id = $("#user_id").attr("data-key");
        let bucket = $("#bucket_id").attr("data-key");
        if (id === undefined || null) {
            window.location.replace("./error.html");
        } else {
            localStorage.setItem("matchBox_user_id", id);
            localStorage.setItem("matchBox_bucket_id", bucket);
            console.log(id);
            window.location.replace("/update_profile/" + id);
        }
    });
    
    $("#switch").on("click", e => {
        e.preventDefault();
        console.log("hello");
        let id = $("#user_id").attr("data-key");
        let box = $("#box_id").attr("data-key");
        if (id === undefined || null) {
            window.location.replace("./error.html");
        } else {
            localStorage.setItem("matchBox_user_id", id);
            localStorage.setItem("matchBox_box_id", box);
            $.ajax("/api/user_boxes/" + id, {
                type: "PUT",
                data: { box_id: box }
            }).then(data => {
                console.log(`UPDATE box_id TO ${ans} WHERE id=${userId}`);
                window.location.replace(`./user_dashboard/${id}/${box}`);
            });
        }
    });

})();