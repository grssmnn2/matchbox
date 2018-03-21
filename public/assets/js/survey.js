(() => {

    // calculates the answer with highest frequency
    function mode(arr) {
        return arr.sort((a, b) =>
            arr.filter(v => v === a).length
            - arr.filter(v => v === b).length
        ).pop();
    }

    // attaching bucket_id to a new user
    $("#submit-survey").on("click", e => {
        e.preventDefault();
        let scoreArray = [];
        for (let i = 1; i < 7; i++) {
            let score = $(`input[name=group${i}]:checked`).val();
            scoreArray.push(+score);
        }
        let ans = mode(scoreArray);
        localStorage.setItem("matchBox_bucket_id", ans);
        window.location.assign("signup.html");
    })

})();

// user cannot proceed if survey is missing answers
$(document).ready(function () {
    $('#submit-survey').prop('disabled', true);
        inspectAllInputFields();
    });

    $('input[type=radio]').change(function () {
        inspectAllInputFields();
    });

function inspectAllInputFields() {
    var count = 0;
    $('#submit-survey').prop('disabled', false);

    $('.survey-options').each(function (i) {
        count = $(this).find('input[type=radio]:checked').length;
        if (count == 0) {
            $('#submit-survey').prop('disabled', true);
        }
    });
}