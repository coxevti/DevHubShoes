import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import { MemberList } from './styles';

export default function Home() {
  return (
    <MemberList>
      {[
        {
          id: 4564870,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4564870?v=4',
          name: 'Alejandro García Salas',
        },
        {
          id: 1550815,
          avatar_url: 'https://avatars2.githubusercontent.com/u/1550815?v=4',
          name: 'Alex Li',
        },
        {
          id: 22417757,
          avatar_url: 'https://avatars3.githubusercontent.com/u/22417757?v=4',
          name: 'Ashley Chien',
        },
        {
          id: 3586644,
          avatar_url: 'https://avatars1.githubusercontent.com/u/3586644?v=4',
          name: 'Dezhi “Andy” Fang',
        },
        {
          id: 65,
          avatar_url: 'https://avatars3.githubusercontent.com/u/6530351?v=4',
          name: 'Diane Ko',
        },
        {
          id: 4560,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4564870?v=4',
          name: 'Alejandro García Salas',
        },
        {
          id: 15,
          avatar_url: 'https://avatars2.githubusercontent.com/u/1550815?v=4',
          name: 'Alex Li',
        },
        {
          id: 7757,
          avatar_url: 'https://avatars3.githubusercontent.com/u/22417757?v=4',
          name: 'Ashley Chien',
        },
        {
          id: 35844,
          avatar_url: 'https://avatars1.githubusercontent.com/u/3586644?v=4',
          name: 'Dezhi “Andy” Fang',
        },
        {
          id: 6530351,
          avatar_url: 'https://avatars3.githubusercontent.com/u/6530351?v=4',
          name: 'Diane Ko',
        },
        {
          id: 45870,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4564870?v=4',
          name: 'Alejandro García Salas',
        },
        {
          id: 1815,
          avatar_url: 'https://avatars2.githubusercontent.com/u/1550815?v=4',
          name: 'Alex Li',
        },
        {
          id: 22417,
          avatar_url: 'https://avatars3.githubusercontent.com/u/22417757?v=4',
          name: 'Ashley Chien',
        },
        {
          id: 35854,
          avatar_url: 'https://avatars1.githubusercontent.com/u/3586644?v=4',
          name: 'Dezhi “Andy” Fang',
        },
        {
          id: 6530354,
          avatar_url: 'https://avatars3.githubusercontent.com/u/6530351?v=4',
          name: 'Diane Ko',
        },
      ].map((item) => (
        <li key={item.id}>
          <img src={item.avatar_url} alt={item.name} />
          <strong>{item.name}</strong>
          <span>R$ 54,35</span>
          <button type="button">
            <div>
              <FiShoppingCart size={16} color="#fff" />0
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </MemberList>
  );
}
