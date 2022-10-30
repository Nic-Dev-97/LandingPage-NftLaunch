import styled from "styled-components";

export const Body = styled.div`
  background-image: url("Background-about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
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

    font-size: 1.5rem;
  }

  input {
    box-sizing: border-box;
    border: 1px solid #ffce4e;
    background-color: transparent;
    padding: 8px;
    width: 30vh;
    font-size: 12px;
    font-family: 'Poppins';

    color: #f5fbf2;
  }

  input:focus {
    outline: solid 1px #ffce4e;
    box-shadow: 0 0 15px  #ffce4e;
    transition: 0.2s;
    
  }

  button{
    cursor: pointer;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ffce4e;
    background: #FFCE4E;
    text-decoration-color: transparent;
    font-size: 12px;
    font-family: 'Poppins';
  }

`;

export const Footer = styled.footer`
  background-color: #1C121F;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #F5FBF2;
  

  span{
    color: #96839B;
  }
  
  a{
    color: #96839B;
    text-align: center;
    padding: 2%;
  }

  p{
    color: #96839B;
    display: flex;
    justify-content: center;
  }


`;
