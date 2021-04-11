import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

function CartTotal({ getTotalProce, getCount }) {
  return (
    <Container>
      <Subtotal>
        Subtotal ({getCount()} items):{" "}
        <NumberFormat
          value={getTotalProce().toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"pln "}
        />
      </Subtotal>
      <CheckoutButton>Proceed to Checkout</CheckoutButton>
    </Container>
  );
}

export default CartTotal;
const Container = styled.div`
  flex: 0.2;
  padding: 20px;
  background-color: #fff;
`;
const Subtotal = styled.h2`
  margin-bottom: 16px;
`;
const CheckoutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;
  border: 2px solid #a88734;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  :hover {
    background-color: #ddb347;
  }
`;
