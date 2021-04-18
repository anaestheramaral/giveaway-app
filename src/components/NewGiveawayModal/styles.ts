import styled from "styled-components";

export const Content = styled.main`
  padding: 3.75rem 11rem;
  border: 2px solid var(--white-60);
  border-radius: 0 0 20px 20px;
  h4 {
      margin-bottom: 2rem;
    }
  >span{
    color: var(--gray);
    opacity: 0.3;
    text-transform: uppercase;
    font-size: 14px;
    display: inline-block;
    width: 100%;
    text-align: center;
  }

`;

export const Form = styled.form`

  .step{
    margin: 1rem 0;

    >div:first-child{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 2rem;

    
  }

  }
  .input-container {
    border: 1px solid var(--white-60);
    border-radius : 10px;

    height: 2.5rem;
    margin: 0.5rem 0 3.5rem 0;
    display: flex;
    align-items: center;
    padding: 0 20px;


    span {
      margin: 0 0.5rem;

      color: var(--purple-100)
    }
    
    input {
      border: none;
      padding-left: 1rem;
    }

  }

  button {
    width: 100%;
    margin-bottom: 2.5rem;
    svg{
      margin-left: 1rem;
    }
  }
`


