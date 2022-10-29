import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  height: 40px;
  background: rgba(188, 18, 226, 0.22);

  position: fixed;

  font-family: "Poppins", sans-serif;

  a {
    color: #ffce4e;
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
  display: grid;
  grid-template-columns: 1.0fr;


  color: #ffffff;
`;

export const Timer = styled.div`
  font-size: 1.0rem;
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

  font-size: 60%;
`;
