import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import InputIconSrc from '../assets/images/icon/command-icon.png';
import axios, { AxiosResponse } from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { deviceActions } from '../stores/reducers';

const Container = styled.div`
  display: flex;
  background: ${theme.secondary};
  width: 100%;
  height: 40vh;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const InputBox = styled.div`
  display: flex;
  height: 50px;
  // align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  height: 3rem;
  background: white;
  border: none;
  border-radius: 20px;
  justify-content: flex-start;
  box-shadow: 2px 2px 2px grey;
`;

const SelectWrapper = styled(Wrapper)`
  width: 10rem;
  margin-right: 1rem;
  padding-right: 1rem;
`;

const SelectBox = styled.select`
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

const InputWrapper = styled(Wrapper)`
  width: 28rem;
`;

const InputIcon = styled.div`
  padding-left: 2rem;
  width: 2rem;
  background-image: url(${InputIconSrc});
  background-size: 1.8rem;
  background-repeat: no-repeat;
  background-position: center center;
`;

const MainInput = styled.input`
  position: relative;
  width: 80%;
  height: 100%;
  background: transparent;
  font-size: inherit;
  outline: none;
  border: none;
`;

const Main = () => {
  const dispatch = useDispatch();

  const selectRef = useRef<HTMLSelectElement>(null);
  const [inputText, setInputText] = useState<string>('');

  const optionList = [
    {
      order: 0,
      label: 'Connect',
      value: 'adb connect $str',
      valid:
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    },
    {
      order: 1,
      label: 'Dialog',
      value:
        'adb shell am broadcast -a "kt.action.voicecommand.asr" --es "kwsText" $str --es "gender" "0" --es "resultCode" "0" --es "age" "adult" com.kt.gigagenie.mc',
    },
    { order: 2, label: 'Input Text', value: 'adb shell input text $str' },
  ];

  type TSelectedOption = {
    order: number;
    label: string;
    value: string;
    valid?: RegExp;
  };

  const [selectedOption, setSelectedOption] = useState<TSelectedOption>(optionList[0]);

  const onSelectChangeHandler = () => {
    const selectedIndex = selectRef?.current?.selectedIndex || 0;
    setSelectedOption(optionList[selectedIndex]);
  };

  const onInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // to-do valid check, connected device check
      if (selectedOption.valid && !selectedOption.valid.test(inputText)) {
        return;
      }
      const command = selectedOption.value.replace('$str', inputText);
      console.log(command);
      axios
        .get('http://localhost:3000/command', { params: { command } })
        .then((res: AxiosResponse) => {
          console.log(res);
          dispatch(deviceActions.setDevice(res.data));
        });
    }
  };

  return (
    <Container>
      <InputBox>
        <SelectWrapper>
          <SelectBox onChange={onSelectChangeHandler} ref={selectRef}>
            {optionList.map((option) => (
              <option key={`select-box-key-${option.order}`}>{option.label}</option>
            ))}
          </SelectBox>
        </SelectWrapper>
        <InputWrapper>
          <InputIcon></InputIcon>
          <MainInput
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={onInputKeyDown}
          ></MainInput>
        </InputWrapper>
      </InputBox>
    </Container>
  );
};

export default Main;
