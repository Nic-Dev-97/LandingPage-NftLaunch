import React from "react";
import { Link } from "react-router-dom";
import { Header, Body, Timer, Date, Name} from "./style.js";



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
            <h1>12  :  03  :  24  :  32</h1>
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
