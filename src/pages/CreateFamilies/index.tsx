import React, { useRef, useCallback } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import { Container, Title, FormHeader } from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface FamilyFormData {
  name: string;
  city: string;
  district: string;
  number: number;
  phone: string;
  state: string;
  street: string;
  zip: string;
}

const CreateFamilies: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);
  const cityInputRef = useRef<TextInput>(null);
  const districtInputRef = useRef<TextInput>(null);
  const numberInputRef = useRef<TextInput>(null);
  const phoneInputRef = useRef<TextInput>(null);
  const stateInputRef = useRef<TextInput>(null);
  const streetInputRef = useRef<TextInput>(null);
  const zipInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();
  const { acs } = useAuth();

  const handleFamilyCreation = useCallback(
    async (data: FamilyFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome da família obrigatório.'),
          city: Yup.string().required('Cidade obrigatória.'),
          district: Yup.string().required('Bairro obrigatório.'),
          number: Yup.number().required('Número obrigatório.'),
          phone: Yup.string().required('Telefone obrigatório.'),
          state: Yup.string().required('Estado obrigatório'),
          street: Yup.string().required('Rua obrigatória'),
          zip: Yup.string().required('CEP obrigatório'),
        });

        console.log(data);

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          ...data,
          acs_id: acs.id,
        };

        try {
          await api.post('/families', formData);

          Alert.alert('Cadastro Realizado', 'Família cadastrada com sucesso.');
        } catch (err) {
          Alert.alert('Cadastro Falhou', 'Tente novamente.');
        }

        navigation.goBack();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        Alert.alert('Erro no cadastro', 'Ocorreu um erro ao validar os campos');
      }
    },
    [navigation],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{
          padding: 10,
        }}>
        <Container>
          <FormHeader>
            <Icon name="users" size={96} color="#21c8b7" />
            <Title>Cadastre a Família</Title>
          </FormHeader>
          <Form ref={formRef} onSubmit={handleFamilyCreation}>
            <Input
              ref={nameInputRef}
              name="name"
              icon="user"
              autoCapitalize="words"
              placeholder="Nome"
              onSubmitEditing={() => {
                cityInputRef.current?.focus();
              }}
            />

            <Input
              ref={cityInputRef}
              name="city"
              icon="map-pin"
              autoCapitalize="words"
              placeholder="Cidade"
              onSubmitEditing={() => {
                districtInputRef.current?.focus();
              }}
            />
            <Input
              ref={districtInputRef}
              autoCapitalize="words"
              name="district"
              icon="navigation"
              placeholder="Bairro"
              onSubmitEditing={() => {
                streetInputRef.current?.focus();
              }}
            />
            <Input
              ref={streetInputRef}
              name="street"
              icon="navigation-2"
              placeholder="Rua"
              textContentType="fullStreetAddress"
              onSubmitEditing={() => numberInputRef.current?.focus()}
            />
            <Input
              ref={numberInputRef}
              keyboardType="numeric"
              name="number"
              icon="hash"
              placeholder="Número"
              onSubmitEditing={() => phoneInputRef.current?.focus()}
            />
            <Input
              ref={phoneInputRef}
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              name="phone"
              icon="lock"
              placeholder="Telefone"
              blurOnSubmit={true}
              onSubmitEditing={() => stateInputRef.current?.focus()}
            />

            <Input
              ref={stateInputRef}
              name="state"
              icon="map"
              placeholder="Estado"
              blurOnSubmit={true}
              onSubmitEditing={() => zipInputRef.current?.focus()}
            />

            <Input
              ref={zipInputRef}
              textContentType="postalCode"
              name="zip"
              icon="book"
              placeholder="CEP"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Cadastrar
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateFamilies;
