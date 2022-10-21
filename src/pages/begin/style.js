import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  background: rgba(188, 18, 226, 0.22);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Poppins", sans-serif;

  a {
    text-decoration: none;
    color: #ffce4e;
  }

  a.houver {
  }

  /* img {
    width: 30px;
    height: 30px;
  } */
`;

export const Body = styled.div`
  background-image: url("Background-begin.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* font-family: "Oxanium", cursive; */
  height: 100vh;
`;

export const Name = styled.div`
  text-align: center;
  // display: grid;
  // font-size: 0.3rem;
  // grid-template-columns: 0.5fr;
  padding-bottom: 10%;
  color: #ffffff;
`;

export const Timer = styled.div`
  // display: flex;

  color: #f5fbf2;

  font-family: "Oxanium";
  // font-size: 1rem;
`;

export const Date = styled.div`
  // text-align: center;

  color: #a717e5;
`;

// export const Min = styled.h1`
//   padding-left: 22%;
// `;
