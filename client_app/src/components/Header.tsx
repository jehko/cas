import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { useSelector, useDispatch } from 'react-redux';
import { deviceState } from '../stores/store';

const Container = styled.div`
  display: inline-flex;
  width: 100%;
  height: 5rem;
  background: ${theme.primary};
  justify-content: space-between;
`;

const Title = styled.div`
  align-items: center;
  color: ${theme.secondary};
  margin-left: 1rem;
`;

const ConnectedWrap = styled.div`
  align-items: center;
  height: 3rem;
  background: white;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 2px grey;
  width: 10rem;
  margin-top: 1rem;
  margin-right: 1rem;
  padding-right: 1rem;
`;

const ConnectedList = styled.select`
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: inherit;
  border: none;
  margin: auto;
  padding: 0 1rem;
  &:focus {
    outline: none;
  }
`;

const Header = () => {
  const deviceList = useSelector((state: deviceState) => state.deviceReducer.deviceList);

  return (
    <Container>
      <Title>
        <h1>CAS</h1>
      </Title>
      <ConnectedWrap>
        <ConnectedList>
          <option>select device</option>
          {deviceList.map((device) => (
            <option key={`select-box-key-${device.ip}`}>{device.label}</option>
          ))}
        </ConnectedList>
      </ConnectedWrap>
    </Container>
  );
};

export default Header;
