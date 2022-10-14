import React from "react";
import { Header, Body, Timer, Date, Name, Min } from "./style.js";

export default function Begin() {
  return (
    <div>
      <Header>
        <div>
          <img src="src\assets\Rectangle_22.png" alt="Logo" />
        </div>
        <div>
          <a href="#">HOME</a>
        </div>
        <div>
          <a href="#">ABOUT</a>
        </div>
        <div>
          <a href="#">CONTACT</a>
        </div>
      </Header>
      <div>
        <Body>
          <Name>
            <h1>NAME branding</h1>
          </Name>
          <Timer>
            <h1>12</h1>
            <h1>:</h1>
            <h1>03</h1>
            <h1>:</h1>
            <h1>24</h1>
            <h1>:</h1>
            <h1>32</h1>
          </Timer>
          <Date>
            <h1>Days</h1>
            <h1>Hours</h1>
            <Min>Minutes</Min>
            <h1>Seconds</h1>
          </Date>
        </Body>
      </div>
    </div>
  );
}
