import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  height: 30px;
  background: rgba(188, 18, 226, 0.22);

  position: fixed;
  
  font-family: "Poppins", sans-serif;
  text-decoration: none;

  a {
    
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
  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Oxanium", cursive;
`;

export const Name = styled.div`
text-align: center;
display: grid;
grid-template-columns: 1.0fr;
padding-bottom: 18%;
color: #FFFFFF;


`;

export const Timer = styled.div`
  font-size: 110%;
   
  color: #f5fbf2;

 font-family: 'Oxanium';
  font-style: normal;
  font-weight: 600;

`;

export const Date = styled.div`
 display: flex;
justify-content: center;

 h1{
  padding-left: 2%;
  padding-right: 2%;

 }

  color: #A717E5;

  padding-top: 5%;
  font-size: 60%;
  
`;

