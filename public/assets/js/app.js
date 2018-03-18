$(document).ready(function () {

    $(".results").on("click", function (event) {
        event.preventDefault();

        // grab all the input from the checked radio buttons by group
        var myAnswerRadioHtmls1 = $('input[name=group1]:checked').val();
        var myAnswerRadioHtmls2 = $('input[name=group2]:checked').val();
        var myAnswerRadioHtmls3 = $('input[name=group3]:checked').val();
        var myAnswerRadioHtmls4 = $('input[name=group4]:checked').val();
        var myAnswerRadioHtmls5 = $('input[name=group5]:checked').val();
        var myAnswerRadioHtmls6 = $('input[name=group6]:checked').val();
        // store all the answer categories in myAnswer array
        var myAnswer = [myAnswerRadioHtmls1, myAnswerRadioHtmls2, myAnswerRadioHtmls3, myAnswerRadioHtmls4, myAnswerRadioHtmls5, myAnswerRadioHtmls6];
        console.log(myAnswer);
        var answers = [];
        // assign initial number of appearances per category
        answers["pet"] = 0;
        answers["kid"] = 0;
        answers["health"] = 0;
        answers["sport"] = 0;
        answers["food"] = 0;
        // loop through filtered user response and add a point per category appearance
        for (var j = 0; j < myAnswer.length; j++) {
            answers[myAnswer[j]]++;
        }
        // compare each value answer with current highest score
        bestCategory = Object.keys(answers).reduce(function (a, b) { return answers[a] > answers[b] ? a : b });
        console.log(bestCategory);
            // somehow send back best category results in modal/on other page
            switch (bestCategory) {
                case "pet":
                    // send back pet buckets
                    console.log("Here are your pet buckets!");
                    break;
                case "kid":
                console.log("Here are your kid buckets!");
                    // send back family buckets
                    break;
                case "health":
                console.log("Here are your health buckets!");
                    // send back health buckets
                    break;
                case "sport":
                console.log("Here are your sport buckets!");
                    // send back sport buckets
                    break;
                case "food":
                console.log("Here are your food buckets!");
                    // send back food buckets
                    break;
                default:
                // default case in case of error
                    
            }
        // POST scores to the api/results page
        $.post("/api/results", bestCategory).done(function (data) {
            // data is the response coming back from server
            console.log(data);

        })
    });
});