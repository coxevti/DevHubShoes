import React, { useState, useEffect } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { MemberList } from './styles';
import api from '~/services/api';
import * as CartActions from '~/store/modules/cart/actions';
import { formatPrice } from '~/utils/formatCurrency';
import Loading from '~/components/Loading';

export default function Home() {
  const [members, setMember] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const amount = useSelector((state) =>
    state.cart.reduce((amountSum, member) => {
      amountSum[member.id] = member.amount;
      return amountSum;
    }, {}),
  );

  async function loadMembers() {
    setLoading(true);
    const organizationMembers = await api.get(
      `/orgs/${process.env.REACT_APP_GITHUB_ORGANIZATION}/members`,
    );
    const membersList = await Promise.all(
      organizationMembers.data.map(async (item) => {
        const user = await api.get(`/users/${item.login}`);
        const { public_repos, followers, following } = user.data;
        const price = parseFloat(
          (public_repos * 0.8 + followers * 0.5 + following * 0.2).toFixed(2),
        );
        const priceFormat = formatPrice(price);
        return {
          ...user.data,
          price,
          priceFormat,
        };
      }),
    );
    setMember(membersList);
    setLoading(false);
  }

  function handleAddMember(item) {
    dispatch(CartActions.addToCartRequest(item));
  }

  useEffect(() => {
    loadMembers();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <MemberList>
      {members.map((item) => (
        <li key={item.id}>
          <img src={item.avatar_url} alt={item.name} />
          <strong>{item.name || item.login}</strong>
          <span>{item.priceFormat}</span>
          <button type="button" onClick={() => handleAddMember(item)}>
            <div>
              <FiShoppingCart size={16} color="#fff" />
              {amount[item.id] || 0}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </MemberList>
  );
}
