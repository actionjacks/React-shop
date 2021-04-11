import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../firebase";

import Logo from "../../assets/logo.png";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <ShoopLogo src={Logo} />
        <h1>Buy MTG Cards</h1>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;
const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px gray;
  text-align: center;
`;
const ShoopLogo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`;
const LoginButton = styled.button`
  margin-top: 50px;
  border-radius: 4px;
  font-size: 16px;
  padding: 4px 8px;
  background-color: #f0c14b;
  cursor: pointer;
`;
