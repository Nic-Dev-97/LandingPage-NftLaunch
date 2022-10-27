import React from "react";
import { Text, Title, Body, Img, Section } from "./style.js";


export default function About() {
  return (
    <Body id="about">
      <Section>
          <Title>ABOUT</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia
            condimentum pharetra. Curabitur vitae egestas nisl, in placerat
            tortor. Donec suscipit massa justo, ut pulvinar ipsum cursus
            volutpat. Nulla a elementum mi. Duis quis lacus quis ligula
            malesuada venenatis ac sed erat. Pellentesque blandit suscipit
            varius. Vivamus nec efficitur nisl. Sed vel odio non orci sodales
            ornare. Phasellus molestie tincidunt mauris. Proin sodales enim a
            nibh tincidunt, quis pellentesque lorem vulputate.
          </Text>
      </Section>
      <Img>
        <img src="ObjetoAbout-rectangle.png" alt="aboutrectangle" />
      </Img>
    </Body>
  );
}
