(() => {

    // calculates the answer with highest frequency
    function mode(arr){
        return arr.sort((a,b) =>
              arr.filter(v => v===a).length
            - arr.filter(v => v===b).length
        ).pop();
    }

    // attaching bucket_id to a new user
    $("#submit-survey").on("click", e => {
        e.preventDefault();
        // ===== for testing until login works =====
        localStorage.setItem("matchBox_user_id", 5);
        // ===== remove between these lines =====
        let userId = JSON.parse(localStorage.getItem("matchBox_user_id"));
        let scoreArray = [];
        for (let i = 1; i < 7; i++) {
            let score = $(`input[name=group${i}]:checked`).val();
            if (score === undefined) { score = Math.floor(Math.random() * 5) + 1 }
            scoreArray.push(+score);
        }        
        let ans = mode(scoreArray);
        $.ajax("/api/users/" + userId, {
            type: "PUT",
            data: { bucket_id: ans }
        }).then(data => {
            console.log(`UPDATE bucket_id TO ${ans} WHERE id=${userId}`);
            window.location.replace("./user_dashboard/:id/:bucket");
        });
    })

})();