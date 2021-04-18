import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 100vh;

  padding: 3.25rem 0;

  position: relative;

  main {
    display: flex;
      /* width: 80vh; */
      width: 100%;
      height: 50vh;
      max-width: 760px;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: space-between;
      padding: 2rem 5rem;

      background: var(--white-80);
      color: var(--white-100);
      border-radius: 10px;

      

    button {
      width: 60%;
    }
    a {
      display: inline;
    }
  }

  footer {
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-bottom: 1rem;
  }
`;
