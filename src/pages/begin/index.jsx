import React from "react";
import { Link } from "react-router-dom";
import { Header, Body, Timer, Date, Name } from "./style.js";

export default function Begin() {
  return (
    <div>
      <Header>
        <div>
          <img src="src\assets\Rectangle_22.png" alt="Logo" />
        </div>

        <div class="line">
          <a href="#">HOME</a>
        </div>
        <div class="line">
          <a href="#about">ABOUT</a>
        </div>
        <div class="line">
          <a href="#contact">CONTACT</a>
        </div>
      </Header>
      <div>
        <Body>
          <Name>
            <h1>NAME branding</h1>
          </Name>
          <Timer>
            <div itemID="days"> teste days {countdown}</div>
          </Timer>
          <Date>
            <h1>Days</h1>
            <h1>Hours</h1>
            <h1>Minutes</h1>
            <h1>Seconds</h1>
          </Date>
        </Body>
      </div>
    </div>
  );
}

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const newYears = "1 Jan 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  days.innerHTML = days;
  hours.innerHTML = formatTime(hours);
  minutes.innerHTML = formatTime(minutes);
  seconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// countdown();
