import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Header = styled.div`
  width: auto;
  height: 5.3%;
  background: rgba(188, 18, 226, 0.22);
  text-align: center;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr;
  justify-content: space-between;
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  padding-right: 20%;
  padding-left: 5%;
  font-family: "Poppins", sans-serif;
  text-decoration: none;

  a {
    text-decoration: none;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const Body = styled.div`
  background-image: url("Background-begin.svg");
  text-align: center;
  width: auto;
  height: 938px;
  left: 0px;
  top: 0px;
  font-family: "Oxanium", cursive;
  padding-top: 32%;
`;
