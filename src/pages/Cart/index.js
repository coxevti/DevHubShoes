import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiPlusCircle,
  FiMinusCircle,
  FiTrash2,
  FiShoppingCart,
} from 'react-icons/fi';

import { Container, CardMembers, CardMembersFooter, EmptyCart } from './styles';

export default function Cart() {
  return (
    <Container>
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
          {[1, 2, 3].map((item) => (
            <tr key={item}>
              <td>
                <img
                  src="https://avatars3.githubusercontent.com/u/6530351?v=4"
                  alt=""
                />
              </td>
              <td>
                <strong>Diane Ko</strong>
                <span>R$ 45,25</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <FiMinusCircle size={20} />
                  </button>
                  <input type="number" readOnly />
                  <button type="button">
                    <FiPlusCircle size={20} />
                  </button>
                </div>
              </td>
              <td>
                <span>452,32</span>
              </td>
              <td>
                <button type="button">
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
          <strong>R$ 123,32</strong>
        </div>
        <button type="button">Finalizar Pedido</button>
      </CardMembersFooter>
      <EmptyCart>
        <FiShoppingCart size={62} color="#04d361" />
        <strong>Seu carrinho está vazio</strong>
        <span>
          Adicione membro clicando no botão “Adicionar ao carrinho” na página de
          membros.
        </span>
        <Link to="/">Voltar para a página inicial</Link>
      </EmptyCart>
    </Container>
  );
}
