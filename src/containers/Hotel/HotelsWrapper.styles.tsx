import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 765px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  flex: 0 50%;
  width: 100%;
  padding: 1.2em;
  box-sizing: border-box;
`;
