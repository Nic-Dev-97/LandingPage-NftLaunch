import styled from "styled-components";

export const Body = styled.div`
  background-image: url("Background-about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // width: auto;
  height: 800px;
`;

export const Forms = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  height: 90vh;

  label {
    // display: block;
    padding-bottom: 5%;
    color: #f5fbf2;
    font-family: "Oxanium";
    // text-align: center;
    // font-style: normal;

    // font-size: 1.0rem;
  }

  input {
    box-sizing: border-box;
    border: 1px solid #ffce4e;
    background-color: transparent;
    padding: 10px;
    width: 50vw;
    font-size: 0.3rem;
    font-family: "Poppins";

    color: #f5fbf2;
  }

  button {
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ffce4e;
    background: #ffce4e;
    text-decoration-color: transparent;
    font-size: 0.3rem;
    font-family: "Poppins";
  }
`;

export const Footer = styled.footer`
  display: flex;
  background-color: #1c121f;
  // height: 20vh;
  // width: 100vw;
  // display: block;
  // font-size: 0.3rem;

  div {
    border: solid red;
    box-sizing: border-box;
  }
`;
