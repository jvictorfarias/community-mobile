import React, {
  useRef,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { RadioButton } from 'react-native-paper';
import { useField } from '@unform/core';

import {
  Container,
  RadioButtonGroups,
  RadioButtonOption,
  RadioButtonText,
  TitleQuestion,
} from './styles';

interface RadioProps {
  name: string;
  label: string;
  state?: Dispatch<SetStateAction<boolean>>;
}

const RadioButtonInput: React.FC<RadioProps> = ({
  name,
  state,
  label,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const { fieldName, registerField, defaultValue = 'false', error } = useField(
    name,
  );

  const [value, setValue] = useState<string>(defaultValue);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current.props,
      path: 'value',
    });
  }, [fieldName, registerField, value, error]);

  return (
    <Container isErrored={!!error}>
      <RadioButton.Group
        ref={inputRef}
        onValueChange={(newValue) => {
          setValue(newValue);
          if (state) {
            const val = newValue === 'true' ? true : false;
            state(val);
          }
        }}
        value={value}>
        <TitleQuestion>{label}</TitleQuestion>
        <RadioButtonGroups>
          <RadioButtonOption>
            <RadioButtonText>Sim</RadioButtonText>
            <RadioButton value={'true'} />
          </RadioButtonOption>

          <RadioButtonOption>
            <RadioButtonText>Não</RadioButtonText>
            <RadioButton value={'false'} />
          </RadioButtonOption>
        </RadioButtonGroups>
      </RadioButton.Group>
    </Container>
  );
};

export default RadioButtonInput;
