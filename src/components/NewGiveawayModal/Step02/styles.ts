import styled from "styled-components";

export const PhotosContent = styled.div `
  width: 100%;

  h4{
    width: 100%;
    display: inline-block;
    text-align: center;
  }
  
  div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 1rem;

    [type=radio] { 
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

      /* IMAGE STYLES */
      [type=radio] + img {
        cursor: pointer;
      }

      /* CHECKED STYLES */
      [type=radio]:checked + img {
        outline: 3px solid var(--purple-100);
        filter: brightness(1)
      }

    img { 
      width: 100%;
      display: inline-block;
      filter: brightness(0.6);

      &:hover {
        filter: brightness(1);
      }


    }

  }
`
