// REDIRECT TO HOME FROM ERRORS & SIGNOUT
(()=> {
    $(document).ready(() => {
        let count = 6;
        let counter = setInterval(timer, 1000);
        function timer() {
            count = count-1;
            if (count <= 0) {
                clearInterval(counter);
                window.location.replace("./index.html");
            }
            $("#timer").html(`<h2 class="timer">You will be redirected in ${count} seconds...</h2>`);
        }
        timer();
    })
})();