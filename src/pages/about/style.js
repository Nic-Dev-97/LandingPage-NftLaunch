import styled from "styled-components";

export const Body = styled.div`
  background-image: url("Background-aboutAbout-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 650px;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr;
  justify-items: center;
`;

export const Section = styled.section`
/* padding-left: 20%; */

`;

export const Text = styled.p`
  padding-top: 20px;
  color: #F5FBF2;
  font-family: Poppins;
  font-size: 90%;
  padding-left: 5%;
  padding-right: 5%;
  text-align: justify;
 
`;

export const Title = styled.h1`
color: #F5FBF2;
font-family: Poppins;
text-align: center;

`;

export const Img = styled.div`
   /* padding-bottom: 10%; */

   img {
    width: 80vw;
    height: 30vh;
  }

`;
