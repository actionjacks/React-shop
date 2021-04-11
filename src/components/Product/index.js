import React from "react";
import styled from "styled-components";
import { db } from "../../firebase";
//delete todo
import StarIcon from "../../assets/starIcon.png";

function Product({ title, price, rating, image, id }) {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    console.log(id, "id from product"); //todo
    console.log(cartItem, "id from db"); //todo

    cartItem.get().then((doc) => {
      console.log(doc);
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container key={id}>
      <Title>{title}</Title>
      <Price>{price} PLN</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map(() => (
            <img src={StarIcon} alt="star-icon" />
          ))}
      </Rating>
      <Image src={image} />

      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
}

export default Product;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  background-color: transparent;
  z-index: 99;
  flex: 1;
  padding: 20px;
  margin: 10px;
`;
const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;
`;
const Rating = styled.div`
  display: flex;
  img {
    height: 15px;
  }
`;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;
const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`;
const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  cursor: pointer;
`;
