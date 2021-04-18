import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  background-color: var(--white-80);
  border-radius: 20px 20px 0 0;
  border: 2px solid var(--white-60);
  border-bottom: 0;

  padding: 2rem 11rem;
  

  .step-container {
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span:first-child{
      display: inline-block;
      width: 2rem;
      height: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      color: rgba(91, 105, 135, 0.65);
      font-weight: 600;
      line-height: 25px;
    }
    span:last-child{
      color: var(--gray);
      margin-top: 0.5rem;
      font-size: 14px;
    }
    .done {
      border: 3px solid var(--green);
    }

    .incomplete {
      border: 3px solid rgba(91, 105, 135, 0.3);
    }
    
  }
`;
