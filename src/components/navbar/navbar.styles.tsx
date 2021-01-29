import styled from "styled-components";

export const Wrap = styled.div`
  height: 3.2em;
  box-shadow: 0px 0px 2px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.1);

  border-right: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;
export const NavbarElement = styled.div`
  display: flex;
  text-align: center;
  justify-content: flex-end;
  width: 100%;
  height: 3em;
`;
export const NavbarLink = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding-right: 1em;
  padding-left: 1em;

  a {
    color: #000;
    text-decoration: none;
  }
`;
