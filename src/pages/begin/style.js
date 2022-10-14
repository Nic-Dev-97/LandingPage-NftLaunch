import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 30px;
  background: rgba(188, 18, 226, 0.22);
  text-align: center;
  position: fixed;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 1fr;
  padding: 1.5ch;
  font-family: "Poppins", sans-serif;
  text-decoration: none;

  a {
    vertical-align: middle;
    text-decoration: none;
    color: #ffce4e;
  }

  a.houver {
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Body = styled.div`
  background-image: url("Background-begin.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: auto;
  height: 938px;
  left: 0px;
  top: 0px;
  font-family: "Oxanium", cursive;
  padding-top: 33%;
`;

export const Name = styled.div`
text-align: center;
display: grid;
grid-template-columns: 1.0fr;
padding-bottom: 10%;
color: #FFFFFF;


`;

export const Timer = styled.div`
  text-align: center;
  vertical-align: middle;
  color: #f5fbf2;
  grid-template-columns: 0.3fr 0.2fr 0.3fr 0.3fr 0.2fr 0.2fr 0.3fr;
  display: grid;
  /* font-size: larger; */
  padding-left: 5%;
  padding-right: 5%;

  font-family: 'Oxanium';
font-style: normal;
font-weight: 600;
font-size: 300%;
line-height: 30px;
 
`;

export const Date = styled.div`
  text-align: center;
  vertical-align: middle;
  grid-template-columns: 0.6fr 0.6fr 0.6fr 0.6fr;
  display: grid;
  color: #A717E5;
  padding-top: 5%;
`;

export const Min = styled.h1`
padding-left: 22%;

`;
