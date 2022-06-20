import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { useSelector, useDispatch } from 'react-redux';

const Container = styled.div`
  display: flex;
  height: 8vh;
  background: ${theme.primary};
`;

const Title = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: ${theme.secondary};
  flex-grow: 14;
  margin-left: 1rem;
`;

const ConnectedWrap = styled.div`
  display: flex;
  height: 3rem;
  background: white;
  border: none;
  border-radius: 20px;
  justify-content: flex-start;
  box-shadow: 2px 2px 2px grey;
  width: 10rem;
  margin-top: 1rem;
  margin-right: 1rem;
  padding-right: 1rem;
`;

const ConnectedList = styled.select`
  width: 100%;
  background: transparent;
  font-size: inherit;
  padding: 0 1rem;
  border: none;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
`;

const Header = () => {
  const state = useSelector<any, any>((state) => state.devReducer);
  const dispatch = useDispatch();
  const OPTIONS = [{ value: '', name: '' }];

  useEffect(() => {
    console.log(state);
  });

  return (
    <Container>
      <Title>
        <h1>CAS</h1>
      </Title>
      <ConnectedWrap>
        <ConnectedList></ConnectedList>
      </ConnectedWrap>
    </Container>
  );
};

export default Header;
