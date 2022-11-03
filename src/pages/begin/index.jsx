import React from "react";
import { Header, Body, Timer, Date, Name } from "./style.js";
import { Counter } from "../../Components/Counter";

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
            <div class="efect">
              <span>NAME Branding</span>
              <span>NAME Branding</span>
              <span>NAME Branding</span>
            </div>
          </Name>
          <Timer>
            <Counter />
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
