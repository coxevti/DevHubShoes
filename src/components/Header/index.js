import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

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

  function handleToggleVisibleCard() {
    setVisibleCard(!visibleCard);
  }

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="Logo DevHubShoes" />
        </Logo>
        <Card>
          <CardHeader
            onMouseEnter={handleToggleVisibleCard}
            onClick={handleToggleVisibleCard}
          >
            <span>0</span>
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
              <button type="button">Finalizar compra</button>
            </CardFooter>
          </CardContentList>
        </Card>
      </Content>
    </Container>
  );
}
