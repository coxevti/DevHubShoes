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
import { formatPrice } from '~/utils/formatCurrency';

export default function Header() {
  const [visibleCard, setVisibleCard] = useState(false);
  const history = useHistory();

  const cartSize = useSelector((state) => state.cart.length || 0);
  const cart = useSelector((state) =>
    state.cart.map((item) => ({
      ...item,
      subTotal: formatPrice(item.price * item.amount),
    })),
  );
  const cartValueTotal = useSelector((state) =>
    formatPrice(
      state.cart.reduce((total, member) => {
        return total + member.price * member.amount;
      }, 0),
    ),
  );

  function handleToggleVisibleCard() {
    setVisibleCard(!visibleCard);
  }

  function handleToCart() {
    setVisibleCard(false);
    history.push('/cart');
  }

  function avatarsApi(name) {
    return `https://ui-avatars.com/api/?name=${name}&background=F4EFFC&color=A28FD0&rounded=true`;
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
            {cart.length === 0 ? (
              <h1>Seu carrinho está vazio</h1>
            ) : (
              <>
                <Scroll>
                  <CardContent>
                    {cart.map((item) => (
                      <li key={item.id}>
                        <img
                          src={item.avatar_url || avatarsApi(item.name)}
                          alt={item.name}
                        />
                        <h4>{item.name}</h4>
                        <span>{item.subTotal}</span>
                      </li>
                    ))}
                  </CardContent>
                </Scroll>
                <CardFooter>
                  <h4>Subtotal</h4>
                  <span>{cartValueTotal}</span>
                  <button type="button" onClick={handleToCart}>
                    Finalizar compra
                  </button>
                </CardFooter>
              </>
            )}
          </CardContentList>
        </Card>
      </Content>
    </Container>
  );
}
