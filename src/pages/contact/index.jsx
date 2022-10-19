import React from "react";

import { Body, Forms } from "./style";

export default function Contact() {
  return (
    <Body id="contact">
      <Forms>
        <form action="#" method="get">
          <label>Ready for the news?</label>
          <input type="email" placeholder="exemple@email.com" name="email" />
          <button type="submit" value="click" id="enviar">Subscribe</button>
        </form>
      </Forms>
      

    </Body>
  );
}
