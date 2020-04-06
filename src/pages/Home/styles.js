import styled from 'styled-components';

export const MemberList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  list-style: none;
  padding: 20px;
  margin-top: 64px;

  @media (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 451px) and (max-width: 659px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 660px) and (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 901px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: var(--box-shadow);
    img {
      align-self: center;
      max-width: 150px;
      border-radius: 50%;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #9f9fa3;
      margin-top: 10px;
      align-self: center;
      text-align: center;
    }
    > span {
      font-size: 21px;
      font-weight: bold;
      color: #000;
      margin: 5px 0 20px;
      align-self: center;
      text-align: center;
    }
    > button {
      background: #04d361;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: auto;
      display: flex;
      align-items: center;
      outline: 0;
      padding: 0;
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
