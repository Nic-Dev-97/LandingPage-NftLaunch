import React from "react";

import { Body, Forms, Footer } from "./style";

export default function Contact() {
  return (
    <Body id="contact">
      <Forms>
        <form action="#" method="get">
          <label>Ready for the news?</label>
          <input type="email" placeholder="exemple@email.com" name="email" />
          <button type="submit" value="click" id="enviar">
            Subscribe
          </button>
        </form>
      </Forms>
      <Footer>
        {/* <div>
          <img scr="Rectangle_22.png" />
        </div> */}

        <div>
          <span>
            Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
            pharetra gravida est.
          </span>
        </div>

        <div>          
          <a href="https://www.facebook.com/">
            <img src="src\assets\facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="src\assets\instagram.png" alt="instagram" />
          </a>
          <a href="https://twitter.com/">
            <img src="src\assets\twitter.png" alt="twitter" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src="src\assets\linkedin.png" alt="linkedin" />
          </a>
        </div>

        <div>
          <h1>About us</h1>
          <a href="#">About us...</a>
        </div>

        <div>
          <h1>Support</h1>
          <a href="#">Help and support</a>
          <a href="#">Others</a>
        </div>

        <div>
          <p>© 2020 NAME branding. All rights reserved.</p>
        </div>

      </Footer>
          
    </Body>
  );
}
