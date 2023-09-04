const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minuteEL = document.getElementById('mins');
const secondEL = document.getElementById('seconds');


const newYears = "1 January 2024";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currrentDate = new Date();
    
    const seconds = (newYearsDate - currrentDate) / 1000;
    
    const day = Math.floor(seconds / 3600 / 24); 
    const hour = Math.floor(seconds / 3600) % 24;
    const minute = Math.floor(seconds / 60) % 60;
    const second = Math.floor(seconds % 60);

    daysEL.innerHTML = day;
    hoursEL.innerHTML = hour;
    minuteEL.innerHTML = minute;
    secondEL.innerHTML = second;
    console.log(daysEL);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

// Inisial Call persecond
countdown();
setInterval(countdown, 1000);



// const daysEl = document.getElementById("days");
// const hoursEl = document.getElementById("hours");
// const minsEl = document.getElementById("mins");
// const secondsEl = document.getElementById("seconds");

// const newYears = "1 Jan 2024";

// function countdown() {
//     const newYearsDate = new Date(newYears);
//     const currentDate = new Date();

//     const totalSeconds = (newYearsDate - currentDate) / 1000;

//     const days = Math.floor(totalSeconds / 3600 / 24);
//     const hours = Math.floor(totalSeconds / 3600) % 24;
//     const mins = Math.floor(totalSeconds / 60) % 60;
//     const seconds = Math.floor(totalSeconds) % 60;

//     daysEl.innerHTML = days;
//     hoursEl.innerHTML = hours;
//     minsEl.innerHTML =  mins;
//     secondsEl.innerHTML = seconds;
//     // console.log(daysEl, hoursEl, minsEl, secondsEl);
// }

// function formatTime(time) {
//     return time < 10 ? `0${time}` : time;
// }

// // initial call
// countdown();

// setInterval(countdown, 1000);



