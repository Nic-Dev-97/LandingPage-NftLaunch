import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  height: 2.4rem;
  background: rgba(188, 18, 226, 0.22);

  position: fixed;

  font-family: "Poppins", sans-serif;

  a {
    color: #ffce4e;
    font-size: 0.8rem;
    text-decoration: none;
  }

  .line a {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 8px;
    color: #ffce4e;
    position: relative;
  }
  .line a:hover::after {
    width: calc(100% - 2rem);
  }
  .line a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1rem;
    height: 0.2rem;
    transition: 0.3s;
    width: 0;
    background: #ffce4e;
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

@media (min-width: 768px) {
  .efect span {
    
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    font-size: 1rem;
  }

}  

.efect {
  color: #ffffff;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
    
}

.efect span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    font-size: 2rem;
    animation: glitch 2s ease infinite 5s alternate-reverse;
  }
  
  @keyframes glitch {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(var(--glitch-translate));
    }
    2% {
      text-shadow: 4px -3px 0 red, -6px 4px 0 blue;
    }
    4%,
    
    100% {
      text-shadow: none;
      transform: none;
      
    }
    
  }

  .efect span:nth-child(odd) {
    --glitch-translate: 15px;
  }
  .efect span:nth-child(even) {
    --glitch-translate: -15px;
  }

`;

export const Timer = styled.div`
  font-size: 2.0rem;
  display: flex;
  
  color: #f5fbf2;
  font-family: 'Oxanium';
  padding-top: 5%;
 
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    padding-left: 3%;
    padding-right: 3%;
  }

  color: #a717e5;

  font-size: 0.5rem;

  /* @media (min-width: 1000px) {
  Date {
    font-size: 10rem;
  } */

/* } */
`;
