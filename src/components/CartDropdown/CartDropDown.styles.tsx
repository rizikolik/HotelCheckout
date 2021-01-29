import styled from "styled-components";

export const DropDownContainer = styled.div`
  width: 240px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid gray;
  background-color: white;
  top: 80px;
  right: 0;
  z-index: 5;
  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  button {
    width: 100%;
    margin-top: auto;
  }
  .empty-cart-message {
    font-size: 1.5em;
    margin: 100px auto;
  }
`;
