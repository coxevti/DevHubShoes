import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.header`
  background: #fff;
  padding: 0 50px;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.24);
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.a`
  text-decoration: none;
  img {
    height: 64px;
  }
`;

export const Card = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  margin-top: 12px;
  cursor: pointer;
`;

export const CardHeader = styled.div`
  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -2px;
    right: -7px;
    font-size: 12px;
    color: #fff;
    background: #000;
    border-radius: 50%;
    font-weight: bold;
    width: 18px;
    height: 18px;
  }
`;

export const CardContentList = styled.div`
  position: absolute;
  width: 300px;
  left: calc(50% - 240px);
  top: calc(100% + 12px);
  background: rgba(0, 0, 0, 0.1);
  color: #000;
  border-radius: 4px;
  padding: 15px;
  text-align: center;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  &::before {
    content: '';
    position: absolute;
    left: calc(50% + 74px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 320px;
  padding: 2px 10px;
`;

export const CardContent = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 3.125rem;
      height: 3.125rem;
    }
    span {
      font-weight: bold;
    }
  }
  li + li {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    padding-top: 10px;
  }
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;
  h4 {
    margin-top: 15px;
    font-weight: bold;
  }
  span {
    margin-top: 15px;
    font-size: 1.6rem;
    font-weight: bold;
  }
  button {
    margin-top: 15px;
    border: 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 45px;
    border-radius: 4px;
  }
`;
