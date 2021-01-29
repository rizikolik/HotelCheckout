import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  img {
    width: 80px;
    height: 100px;
    margin: 5px;
  }

  .arrow {
    cursor: pointer;
  }
`;
export const ItemDetails = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;
