(() => {
    const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let today = new Date();
    let date = today.getDate();
    let nextMonth = monthsArr[+(today.getMonth() + 1)];
    let math = 27 - date;

    if (math > 0) {
        $("#highlight-row").html(`<h4 class="highlight">You Have <span class="accent">${math}</span> More Days until Your ${nextMonth} Box Ships!<h4>`);
    } else {
        $("#highlight-row").html(`<h4 class="highlight">Your ${nextMonth} Box has Shipped!<h4>`);
    }
})();