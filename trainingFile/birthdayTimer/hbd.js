const happyBirthDayTimer = () => {
    let display = document.querySelector(".birthday");
    let countdown = document.querySelector(".countdown");
    let happyBirthday = document.querySelector(".hbd");
    let seconds = 1000;
    let minutes = 60 * seconds;
    let hours = 60 * minutes;
    let days = 24 * hours;
    let dateOrigin = new Date().getTime();
    let tomorrow = Date.parse("december 21, 2022");
    let gap = tomorrow - dateOrigin;
    let remainingDays = Math.floor(gap / days);
    let remainingHours = Math.floor((gap % days) / hours);
    let remainingMinutes = Math.floor((gap % hours) / minutes);
    let remainingSeconds = Math.floor((gap % minutes) / seconds);
    display.textContent = "Mon anniversaire est dans :";
    countdown.textContent = `${remainingDays}j : ${remainingHours}h : ${remainingMinutes}min : ${remainingSeconds}s `;
    if (
        remainingDays == 0 &&
        remainingHours == 0 &&
        remainingMinutes == 0 &&
        remainingSeconds == 0
    ) {
        clearInterval(timer);
        happyBirthday.textContent =
            "Happy Birthday Mr Farrel BATY. Enjoy your day!";
    }
};
const timer = setInterval(happyBirthDayTimer, 1000);
