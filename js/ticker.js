document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2022, 12, 1);
    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.innerHTML = days < 10 ? '0' + days : days;
        $hours.innerHTML = hours < 10 ? '0' + hours : hours;
        $minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        $seconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector('.event.first .event__timer-item.day');
    const $hours = document.querySelector('.event.first .event__timer-item.hour');
    const $minutes = document.querySelector('.event.first .event__timer-item.minute');
    const $seconds = document.querySelector('.event.first .event__timer-item.sec');

    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2023, 1, 1);
    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.innerHTML = days < 10 ? '0' + days : days;
        $hours.innerHTML = hours < 10 ? '0' + hours : hours;
        $minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        $seconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector('.event.second .event__timer-item.day');
    const $hours = document.querySelector('.event.second .event__timer-item.hour');
    const $minutes = document.querySelector('.event.second .event__timer-item.minute');
    const $seconds = document.querySelector('.event.second .event__timer-item.sec');

    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2023, 2, 1);
    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.innerHTML = days < 10 ? '0' + days : days;
        $hours.innerHTML = hours < 10 ? '0' + hours : hours;
        $minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        $seconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector('.event.third .event__timer-item.day');
    const $hours = document.querySelector('.event.third .event__timer-item.hour');
    const $minutes = document.querySelector('.event.third .event__timer-item.minute');
    const $seconds = document.querySelector('.event.third .event__timer-item.sec');

    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2023, 3, 1);
    let timerId = null;

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }

    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $days.innerHTML = days < 10 ? '0' + days : days;
        $hours.innerHTML = hours < 10 ? '0' + hours : hours;
        $minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        $seconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }

    const $days = document.querySelector('.event.fourth .event__timer-item.day');
    const $hours = document.querySelector('.event.fourth .event__timer-item.hour');
    const $minutes = document.querySelector('.event.fourth .event__timer-item.minute');
    const $seconds = document.querySelector('.event.fourth .event__timer-item.sec');

    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});