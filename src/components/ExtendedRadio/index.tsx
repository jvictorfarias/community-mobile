import React, { useRef, useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useField } from '@unform/core';

import {
  Container,
  RadioButtonGroups,
  RadioButtonOption,
  RadioButtonText,
  TitleQuestion,
} from './styles';

interface Options {
  value: string;
  label: string;
}

interface RadioProps {
  vertical?: boolean;
  name: string;
  title: string;
  options: Array<Options>;
}

const ExtendedRadio: React.FC<RadioProps> = ({
  vertical = false,
  options,
  name,
  title,
  ...rest
}) => {
  const inputRef = useRef<any>(null);
  const {
    fieldName,
    registerField,
    defaultValue = options[0].value,
    error,
  } = useField(name);

  const [value, setValue] = useState<any>(defaultValue);
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
        onValueChange={(value) => setValue(value)}
        value={value}>
        <TitleQuestion>{title}</TitleQuestion>
        <RadioButtonGroups vertical={vertical}>
          {options.map((option) => (
            <RadioButtonOption key={option.value}>
              <RadioButton value={option.value} />
              <RadioButtonText>{option.label}</RadioButtonText>
            </RadioButtonOption>
          ))}
        </RadioButtonGroups>
      </RadioButton.Group>
    </Container>
  );
};

export default ExtendedRadio;
