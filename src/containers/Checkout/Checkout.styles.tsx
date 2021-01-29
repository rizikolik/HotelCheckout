import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  margin: 40px auto;

  @media screen and (max-width: 765px) {
    width: 99%;
  }
`;
export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  text-align: center;
`;
export const Warns = styled.div`
  margin-top: 40px;
  width: 100%;
  font-size: 24px;
  color: red;
  text-align: center;
`;

export const Headers = styled.div`
  width: 100%;
  height: 40px;
  overflow: hidden;
  text-align: center;
  display: grid;
  grid-template-columns: 18% 18% 18% 14% 18% 11%;
  border-bottom: 1px solid gray;
  text-transform: capitalize;
`;
export const ItemsWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 50vh;
  overflow-y: scroll;
  scrollbar-width: none;
`;
export const ItemContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  display: grid;

  grid-template-columns: 20% 80%;
  img {
    width: 100%;
    margin: auto;
  }
`;
export const ItemDetails = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  text-align: center;
  grid-template-columns: 27% 20% 15% 27% 10%;
`;
