import styled from "styled-components";

export const Body = styled.div`
  background-image: url("Background-about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: auto;
  height: 860px;
`;

export const Forms = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  height: 85vh;

  label {
    display: block;
    padding-bottom: 5%;
    color: #f5fbf2;
    font-family: "Oxanium";
    text-align: center;
    font-style: normal;

    font-size: 34px;
  }

  input {
    box-sizing: border-box;
    border: 1px solid #ffce4e;
    background-color: transparent;
    padding: 10px;
    width: 50vh;
    font-size: 16px;
    font-family: 'Poppins';

    color: #f5fbf2;
  }

  button{
    cursor: pointer;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ffce4e;
    background: #FFCE4E;
    text-decoration-color: transparent;
    font-size: 16px;
    font-family: 'Poppins';
  }

`;
