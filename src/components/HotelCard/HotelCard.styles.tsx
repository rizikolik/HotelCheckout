import styled from "styled-components";

export const CardOverlay = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.8em;
  max-width: 100%;
  min-height: 45vh;
  padding: 0.8em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.33em;
  :hover& {
    button {
      visibility: visible;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0.8em;
    height: auto;
    :hover {
      button {
        visiblity: visible;
      }
    }
  }
`;
export const TopImageContainer = styled.div`
  width: 100%;
  padding-bottom: 0.8em;
  height: 20vh;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const ImageOverlay = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const InlineImageWrapper = styled.div`
  max-width: 100%;
  height: 20vh;
  display: flex;
  flex: 0 50%;
`;
export const ImageContainer = styled.div`
  flex: 0 50%;
  height: 100%;
  padding-right: 0.2em;
`;
export const RightInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8em;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5em;
`;
export const IconContainer = styled.div`
  text-alingn: left;
  flex: 0 50%;
  width: 100%;
`;
export const RightBottomContainer = styled.div`
  width: 100%;
`;
export const HalfContainer = styled.div`
  width: 100%;
  flex: 0 50%;
  text-align: right;
`;
