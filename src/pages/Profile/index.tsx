import React, { useRef, useCallback } from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title, Avatar } from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  password?: string;
  newPassword?: string;
  newPasswordConfirmation?: string;
}

const Profile: React.FC = () => {
  const { acs, signOut } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const nameInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const newPasswordInputRef = useRef<TextInput>(null);
  const newPasswordConfirmationInputRef = useRef<TextInput>(null);
  const cnsInputRef = useRef<TextInput>(null);
  const cboInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleUpdateProfile = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string(),
          email: Yup.string().email('Digite email válido'),
          password: Yup.string(),
          newPassword: Yup.string().when('password', {
            is: String,
            then: Yup.string().min(6),
            otherwise: Yup.string(),
          }),
          newPasswordConfirmation: Yup.string()
            .when('newPassword', {
              is: String,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('newPassword')], 'Senhas diferentes'),
        });

        console.log(data);
        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          password,
          newPassword,
          newPasswordConfirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(password
            ? {
                password,
                newPassword,
                newPasswordConfirmation,
              }
            : {}),
        };

        try {
          const response = await api.put('/acs', formData);
          console.log(response);

          Alert.alert(
            'Cadastro Realizado com Sucesso',
            'Você já pode fazer logon na aplicação.',
          );
        } catch (err) {
          Alert.alert('Alteração de dados falhou', err.message);
        }

        navigation.goBack();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        Alert.alert(
          'Erro na alteração de dados',
          'Ocorreu um erro ao tentar criar a conta',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{
            padding: 10,
          }}>
          <Container>
            <Avatar source={{ uri: acs.avatar }} />
            <View>
              <Title>Perfil</Title>
            </View>
            <Form ref={formRef} onSubmit={handleUpdateProfile}>
              <Input
                ref={cnsInputRef}
                name="cns"
                icon="user"
                placeholder="CNS"
                editable={false}
                value={`CNS: ${acs.cns}`}
                style={{ opacity: 0.5 }}
              />

              <Input
                ref={cboInputRef}
                name="cbo"
                icon="user"
                placeholder="CBO"
                editable={false}
                value={`CBO: ${acs.cbo}`}
                style={{ opacity: 0.5 }}
              />
              <Input
                ref={nameInputRef}
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                defaultValue={acs.name}
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                defaultValue={acs.email}
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                textContentType="newPassword"
                name="password"
                icon="lock"
                placeholder="Senha atual"
                onSubmitEditing={() => newPasswordInputRef.current?.focus()}
              />

              <Input
                ref={newPasswordInputRef}
                secureTextEntry
                textContentType="newPassword"
                name="newPassword"
                icon="lock"
                placeholder="Nova senha"
                onSubmitEditing={() =>
                  newPasswordConfirmationInputRef.current?.focus()
                }
              />

              <Input
                ref={newPasswordConfirmationInputRef}
                secureTextEntry
                textContentType="newPassword"
                name="newPasswordConfirmation"
                icon="lock"
                placeholder="Confirmar nova senha"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Confirmar mudanças
              </Button>
            </Form>
            <Button onPress={() => signOut()}>Sair</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
