import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --purple-100: #884DE0;
    --purple-80: #B391E3;
    --puple-gradient: linear-gradient(112.01deg, #8F4CF5 11.74%, #B391E3 84.75%);
    --pink: #FF7FAF;
    --black: #242424;
    --gray: #5B6987;
    --white-60: #EBECF4;
    --white-80: #F8F8FC;
    --white-100: #ffff;

    --blue: #2B93F2;
    --green: #6FCF97;
    --yelow: #FFC24C;
    --pink-dark: #FF2A7A;
  }

  body, input, button {
    font: 1rem Lato, sans-serif;
  }

  h1 {
    font-size: 56px;
  }
  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 32px;
  }

  h1,h2,h3,h4,h5,h6 {
    color: var(--black);
  }

  p{
    color: var(--gray);
  }

  a {
    text-decoration: none;
    color: var(--pink);

    &:hover{
      text-decoration: underline;
    }
  }

  input, button {
    border-radius: 10px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    background-color: var(--purple-100);
    color: var(--white-100);
    border: none;

    font-size: 112.5%;
    font-weight: 700;
    line-height: 1.4rem;
    padding: 0.6rem 0;

    transition: background-color 0.15s;

    &:hover{
      background-color: rgba(89, 36, 167, 1);
    }
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .react-modal-content{
    position: relative;
    width: 100%;
    max-width: 839px;
    background: var(--white-100);
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    /* padding: 4rem 3rem;     */
  }

  .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    background: transparent;
    transition: filter 0.15s;

    &:hover{
      filter: brightness(0.75);
    }
  }


`;
