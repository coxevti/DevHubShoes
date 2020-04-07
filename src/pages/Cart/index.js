import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiPlusCircle,
  FiMinusCircle,
  FiTrash2,
  FiShoppingCart,
} from 'react-icons/fi';

import { useSelector, useDispatch } from 'react-redux';
import { Container, CardMembers, CardMembersFooter, EmptyCart } from './styles';

import * as CartActions from '~/store/modules/cart/actions';
import { formatPrice } from '~/utils/formatCurrency';
import avatarsApi from '~/utils/avatarApi';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) =>
    state.cart.map((item) => ({
      ...item,
      priceFormat: formatPrice(item.price),
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
  function increment(member) {
    dispatch(CartActions.updateAmountRequest(member.id, member.amount + 1));
  }

  function decrement(member) {
    if (member.amount <= 1) return;
    dispatch(CartActions.updateAmountRequest(member.id, member.amount - 1));
  }

  function remove(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  function checkout() {
    dispatch(CartActions.checkout());
    window.scrollTo(0, 0);
  }

  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <CardMembers>
            <thead>
              <tr>
                <th />
                <th>Membro</th>
                <th>Qtd</th>
                <th>SubTotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.avatar_url || avatarsApi(item.name)}
                      alt={item.name || item.login}
                    />
                  </td>
                  <td>
                    <strong>{item.name || item.login}</strong>
                    <span>{item.priceFormat}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(item)}>
                        <FiMinusCircle size={20} />
                      </button>
                      <input type="number" readOnly value={item.amount} />
                      <button type="button" onClick={() => increment(item)}>
                        <FiPlusCircle size={20} />
                      </button>
                    </div>
                  </td>
                  <td>
                    <span>{item.subTotal}</span>
                  </td>
                  <td>
                    <button type="button" onClick={() => remove(item.id)}>
                      <FiTrash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </CardMembers>
          <CardMembersFooter>
            <div>
              <span>Valor total</span>
              <strong>{cartValueTotal}</strong>
            </div>
            <button type="button" onClick={checkout}>
              Finalizar Pedido
            </button>
          </CardMembersFooter>
        </>
      ) : (
        <EmptyCart>
          <FiShoppingCart size={62} color="#04d361" />
          <strong>Seu carrinho está vazio</strong>
          <span>
            Adicione membro clicando no botão “Adicionar ao carrinho” na página
            de membros.
          </span>
          <Link to="/">Voltar para a página inicial</Link>
        </EmptyCart>
      )}
    </Container>
  );
}
