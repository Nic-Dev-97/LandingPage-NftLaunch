// import { useState } from "react";

// const days = document.getElementById("days");
// const hours = document.getElementById("hours");
// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");

const CountdownTimer = () => {
  return (
    <div>
      <span>day</span>
      <span>hours</span>
      <span>minutes</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;

// const newYears = "1 Jan 2023";
// export default CountdownTimer;

// function Countdown() {
//   const newYearsDate = new Date(newYears);
//   const currentDate = new Date();

//   const totalSeconds = (newYearsDate - currentDate) / 1000;

//   const days = Math.floor(totalSeconds / 3600 / 24);
//   const hours = Math.floor(totalSeconds / 3600) % 24;
//   const minutes = Math.floor(totalSeconds / 60) % 60;
//   const seconds = Math.floor(totalSeconds) % 60;

//   days.innerHTML = days;
//   hours.innerHTML = formatTime(hours);
//   minutes.innerHTML = formatTime(minutes);
//   seconds.innerHTML = formatTime(seconds);
// }

// function formatTime(time) {
//   return time < 10 ? `0${time}` : time;
// }

// // countdown();
