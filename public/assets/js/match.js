// here we create the logic to link a user to a best match box based on survey scoring

// require access to the boxes and user information
var db = require("../models");

module.exports = function (app) {

    // add information to the /api/results route as users finish survey
    app.post("/api/results", function (req, res) {
        // this will eventually store category answer to user survey
        var bestCategory;
        // array to store user answers
        var myAnswer = [];
        var myAnswerRadioHtmls = $('input[type=radio]:checked');

        // loop through html mess to pull out category answers and store in myAnswer array
        for (var i = 0; i < myAnswerRadioHtmls.length; i++) {
            myAnswer.push(myAnswerRadioHtmls[i].val())
        }
        // loop through the myAnswer array and add points for # of times each category appears in user answers
        var answers = [];
        answers["pet"] = 0;
        answers["kid"] = 0;
        answers["health"] = 0;
        answers["sport"] = 0;
        answers["food"] = 0;

        for (var j = 0; j < myAnswer.length; j++) {
            answers[myAnswer[j]]++;
        }

        console.log(Object.keys(answers).reduce(function (a, b) { return answers[a] > answers[b] ? a : b }));


        // bestCategory is the category that showed up the most in myAnswer array
    });
};
