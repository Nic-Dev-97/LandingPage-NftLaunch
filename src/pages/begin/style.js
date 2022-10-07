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
    color: #FFCE4E;
  }

  a.houver{

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
  padding-top: 32%;

  h1 { 
    text-align: center;
    vertical-align: middle;
  }
  
  `;
