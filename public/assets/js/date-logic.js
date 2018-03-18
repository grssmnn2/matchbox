(() => {
    const shipDates = {
        1: "01/27/18",
        2: "02/27/18",
        3: "03/27/18",
        4: "04/27/18", 
        5: "05/27/18",
        6: "06/27/18",
        7: "07/27/18",
        8: "08/27/18",
        9: "09/27/18",
        10: "10/27/18",
        11: "11/27/18",
        12: "12/27/18"
    }
    const moment = require("moment");
    let today = moment().format();
    let date_only = +(moment(today).date());
    let currentMonth = (moment(today).month() + 1);
    let cutOff_formatted = moment(shipDates[currentMonth], "MM/DD/YYYY", true).format();
    let cutOff_date = +(moment(utOff_formatted).date());
    let math = cutOff_date - date_only;

    if (math > 0) {
        $("#hightlight-row").html(`<h4 class="highlight">There are ${math} Days until Your ${moment().month(currentMonth).format("MMMM")} Box Ships!<h4>`);
    } else {
        $("#hightlight-row").html(`<h4 class="highlight">Your ${moment().month(currentMonth).format("MMMM")} Box has Shipped!<h4>`);
    }
})();
