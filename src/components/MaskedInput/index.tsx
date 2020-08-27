import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
interface InputProps extends TextInputMaskProps {
  name: string;
}

const InputMask: React.FC<InputProps> = ({ name, ...rest }, ref) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      <TextInputMask
        ref={inputRef}
        value={value}
        onChange={(field) => setV}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};

export default InputMask;
