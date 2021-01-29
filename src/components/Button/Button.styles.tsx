import styled from "styled-components";

export const StyledButtton = styled.button`
  width: 100%;
  text-align: center;
  margin: auto;
  height: 2em;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.33em;
  background-color: ${props => (props.color ? props.color : "#0e76a8")};
  color: #fff;
  cursor: pointer;
  font-size: 1.2em;
  line-height: 1.2em;
  font-weight: 600;
  visibility: ${props =>
    props["data-visible"] ? props["data-visible"] : "hidden"};
`;
