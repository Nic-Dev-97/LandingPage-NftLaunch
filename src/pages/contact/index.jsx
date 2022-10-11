import React from "react";

import { Body } from "./style";

export default function Contact() {
  return (
    <Body>
      <div>
        <form action="#" method="get">
          <input type="email" placeholder="exemple@email" name="email" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </Body>
  );
}
