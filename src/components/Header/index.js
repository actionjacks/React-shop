import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
//icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RoomIcon from "@material-ui/icons/Room";

function Header({ cartItems, user, signOut }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src={Logo} alt="shop logo" />
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <RoomIcon />
        <HeaderOption onClick={signOut}>
          <OptionLineOne>Hello {user?.name}</OptionLineOne>
          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>{user?.name}</OptionLineOne>
          <OptionLineOne>Accout & Lists</OptionLineOne>
        </HeaderOption>
        <HeaderOption>
          <OptionLineOne>Returns </OptionLineOne>
          <OptionLineOne>& Delivery</OptionLineOne>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />
            <CartCount>{getCount()}</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
}
export default Header;
const Container = styled.div`
  z-index: 99;
  position: sticky;
  top: 0;
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const HeaderLogo = styled.div`
  img {
    width: 180px;
    margin-left: 11px;
  }
`;
const HeaderOptionAddress = styled.div`
  display: flex;
  align-items: center;
  padding-left: 9px;
`;
const OptionLineOne = styled.div`
  display: flex;
`;
const OptionLineTwo = styled.div`
  font-weight: 700;
`;
const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 5px;
  background-color: #fff;
  :focus-within {
    box-shadow: 0 0 0 3px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;
const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 9px;
`;
const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    text-decoration: none;
    color: white;
  }
`;
const CartCount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`;
