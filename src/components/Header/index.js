import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {
  Container,
  Content,
  Logo,
  Card,
  CardHeader,
  CardContentList,
  Scroll,
  CardContent,
  CardFooter,
} from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  const [visibleCard, setVisibleCard] = useState(false);
  const history = useHistory();

  const cartSize = useSelector((state) => state.cart.length || 0);

  function handleToggleVisibleCard() {
    setVisibleCard(!visibleCard);
  }

  function handleToCart() {
    setVisibleCard(false);
    history.push('/cart');
  }

  return (
    <Container>
      <Content>
        <Logo to="/">
          <img src={logo} alt="Logo DevHubShoes" />
        </Logo>
        <Card>
          <CardHeader
            onMouseEnter={handleToggleVisibleCard}
            onClick={handleToggleVisibleCard}
          >
            <span>{cartSize}</span>
            <FiShoppingCart size={36} color="#04d361" />
          </CardHeader>
          <CardContentList
            visible={visibleCard}
            onMouseLeave={handleToggleVisibleCard}
          >
            {/* <h1>Seu carrinho está vazio</h1> */}
            <Scroll>
              <CardContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <li key={item}>
                    <img
                      src="https://ui-avatars.com/api/?name=Valdir+Coxev&background=F4EFFC&color=A28FD0&rounded=true"
                      alt=""
                    />
                    <h4>Valdir Coxev</h4>
                    <span>R$ 124,35</span>
                  </li>
                ))}
              </CardContent>
            </Scroll>
            <CardFooter>
              <h4>Subtotal</h4>
              <span>R$ 2.328,85</span>
              <button type="button" onClick={handleToCart}>
                Finalizar compra
              </button>
            </CardFooter>
          </CardContentList>
        </Card>
      </Content>
    </Container>
  );
}
