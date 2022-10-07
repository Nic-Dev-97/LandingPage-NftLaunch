import React from "react";
import { Header, Body } from "./style.js";

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
          <div>
            <h1>12 : 03 : 24</h1>
          </div>
        </Body>
      </div>
    </div>
  );
}
