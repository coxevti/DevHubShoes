import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
`;

export const CardMembers = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 4px;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    thead {
      width: 767px;
    }
    tbody {
      width: 767px;
    }
  }
  thead tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    th {
      color: #999;
      padding: 12px;
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
  tbody tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    td {
      padding: 12px;
      flex: 1;
      text-align: center;
      img {
        height: 100px;
        border-radius: 4px;
      }
      strong {
        color: #333;
        display: block;
      }
      span {
        display: block;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          border: 1px solid #ddd;
          border-radius: 4px;
          color: #666;
          padding: 6px;
          width: 50px;
          text-align: right;
          outline: none;
        }
      }
      button {
        background: none;
        border: 0;
        padding: 6px;
        outline: none;
        svg {
          display: flex;
        }
      }
    }
  }
`;

export const CardMembersFooter = styled.footer`
  margin-top: 30px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;

  @media (max-width: 490px) {
    display: block;
    width: 100%;
    text-align: center;
    button {
      margin-top: 10px;
    }
  }
  div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    span {
      color: #999;
      font-weight: bold;
    }
    strong {
      color: #333;
      font-size: 28px;
      margin-left: 10px;
      font-weight: bold;
    }
  }
  button {
    background: #04d361;
    border: 0;
    color: #fff;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  strong {
    color: #04d361;
    font-size: 18px;
    font-weight: bold;
    margin-top: 25px;
  }
  span {
    color: #666;
    font-weight: bold;
    margin-top: 15px;
    text-align: center;
  }
  a {
    margin-top: 20px;
    font-size: 16px;
    border: 1px solid #39acdf;
    border-radius: 4px;
    background: transparent;
    color: #39acdf;
    width: 100%;
    padding: 13px 6px;
    text-decoration: none;
    text-align: center;
  }
`;
