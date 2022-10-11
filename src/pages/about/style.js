import styled from "styled-components";

export const Body = styled.div`
  background-image: url("Background-aboutAbout-back.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 698px;
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 2fr;
  justify-items: center;
`;

export const Section = styled.section`
padding-left: 20%;

`;

export const Text = styled.p`
  padding-top: 20px;
  color: #F5FBF2;
  font-family: Poppins;
 
`;

export const Title = styled.h1`
color: #F5FBF2;
font-family: Poppins;

`;

export const Img = styled.div`
padding-right: 10%;
max-width: 85%;
/* max-height: 5%; */

`;
