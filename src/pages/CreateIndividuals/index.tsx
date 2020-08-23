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
import RadioButtonInput from '../../components/Radio';

interface IndividualFormData {
  family_id: string;
  name: string;
  cns: string;
  cpf: string;
  birthday: string;
  sex: string;
  color: string;
  father_name: string;
  mother_name: string;
  nationality: string;
  birth_country: string;
  birth_state: string;
  is_school_frequency?: boolean;
  education: string;
  work: string;
  is_deficient?: boolean;
  deficient_faulty: string;
  is_pregnant?: boolean;
  is_smoker?: boolean;
  imc: string;
  is_drug_addict?: boolean;
  is_alcoholic?: boolean;
  is_hypertensive?: boolean;
  is_diabetic?: boolean;
  is_stroke?: boolean;
  is_infarct?: boolean;
  is_heart_sick?: boolean;
  heart_disease: string;
  is_kidney_sick?: boolean;
  kidney_disease: string;
  is_respiratory_sick?: boolean;
  respiratory_disease: string;
  is_hanseniase?: boolean;
  is_tuberculosis?: boolean;
  is_cancer?: boolean;
  is_hospitalization_last_12_months?: boolean;
  hospitalization_cause: string;
  is_mental_sick?: boolean;
  is_bedridden?: boolean;
  is_domicilied?: boolean;
  is_homeless?: boolean;
}

const CreateFamilies: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);
  const cnsInputRef = useRef<TextInput>(null);
  const cpfInputRef = useRef<TextInput>(null);
  const birthdayInputRef = useRef<any>(null);
  const sexInputRef = useRef<TextInput>(null);
  const colorInputRef = useRef<TextInput>(null);
  const fatherInputRef = useRef<TextInput>(null);
  const motherInputRef = useRef<TextInput>(null);
  const nationalityInputRef = useRef<any>(null);
  const birthCountryInputRef = useRef<TextInput>(null);
  const birthStateInputRef = useRef<TextInput>(null);
  const isSchoolInputRef = useRef<any>(null);
  const educationInputRef = useRef<any>(null);
  const workInputRef = useRef<any>(null);
  const isDeficientInputRef = useRef<any>(null);
  const deficientFaultyInputRef = useRef<any>(null);
  const isPregnantInputRef = useRef<any>(null);
  const isSmokerInputRef = useRef<any>(null);
  const imcInputRef = useRef<any>(null);
  const isDrugAddictInputRef = useRef<any>(null);
  const isAlcoholicInputRef = useRef<any>(null);
  const isHypertensiveInputRef = useRef<any>(null);
  const isDiabeticInputRef = useRef<any>(null);
  const isStrokeInputRef = useRef<any>(null);
  const isInfarctInputRef = useRef<any>(null);
  const isHeartSickInputRef = useRef<any>(null);
  const heartDiseaseInputRef = useRef<any>(null);
  const isKidneySickInputRef = useRef<any>(null);
  const kidneyDiseaseInputRef = useRef<any>(null);
  const isRespiratorySickInputRef = useRef<any>(null);
  const respiratoryDiseaseInputRef = useRef<any>(null);
  const isHanseniaseInputRef = useRef<any>(null);
  const isTuberculosisInputRef = useRef<any>(null);
  const isCancerInputRef = useRef<any>(null);
  const isHospitalizationInputRef = useRef<any>(null);
  const hospitalizationCauseInputRef = useRef<any>(null);
  const isMentalSickInputRef = useRef<any>(null);
  const isBdriddenInputRef = useRef<any>(null);
  const isDomiciliedInputRef = useRef<any>(null);
  const isHomelessInputRef = useRef<any>(null);

  const navigation = useNavigation();
  const { acs } = useAuth();

  const handleIndividualCreation = useCallback(
    async (data: IndividualFormData) => {
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
          await api.post('/individuals', formData);

          Alert.alert(
            'Cadastro Realizado',
            'Indivíduo cadastradado com sucesso.',
          );
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
            <Icon name="user" size={96} color="#21c8b7" />
            <Title>Cadastre o Indivíduo</Title>
          </FormHeader>
          <Form ref={formRef} onSubmit={(data) => console.log(data)}>
            <Input
              ref={nameInputRef}
              name="name"
              autoCapitalize="words"
              placeholder="Nome"
              onSubmitEditing={() => {
                cnsInputRef.current?.focus();
              }}
            />

            <Input
              ref={cnsInputRef}
              name="cns"
              autoCapitalize="words"
              placeholder="CNS"
              onSubmitEditing={() => {
                cpfInputRef.current?.focus();
              }}
            />
            <Input
              ref={cpfInputRef}
              autoCapitalize="words"
              name="cpf"
              placeholder="CPF"
              onSubmitEditing={() => {
                birthdayInputRef.current?.focus();
              }}
            />
            <Input
              ref={birthdayInputRef}
              name="birthday"
              placeholder="Data de nascimento"
              keyboardType="numeric"
            />
            <Input ref={sexInputRef} name="sex" placeholder="Sexo" />
            <Input ref={colorInputRef} name="color" placeholder="Cor" />

            <Input
              ref={fatherInputRef}
              name="father_name"
              placeholder="Nome do pai"
              onSubmitEditing={() => motherInputRef.current?.focus()}
            />

            <Input
              ref={motherInputRef}
              name="mother_name"
              placeholder="Nome da mãe"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
            <Input
              ref={nationalityInputRef}
              name="nationality"
              placeholder="Nacionalidade"
            />
            <Input
              ref={birthCountryInputRef}
              name="birth_country"
              placeholder="Nome da mãe"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
            <Input
              ref={birthStateInputRef}
              name="birth_state"
              placeholder="Estado que nasceu"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />
            <RadioButtonInput
              //ref={isSchoolInputRef}
              name="is_school"
              label="Frequência escolar?"
            />
            <Input
              ref={educationInputRef}
              name="education"
              placeholder="Nível de educação"
            />

            <Input
              ref={workInputRef}
              name="work"
              placeholder="Trabalho atual"
            />
            <RadioButtonInput name="is_deficient" label="Possui deficiência?" />
            <Input
              ref={deficientFaultyInputRef}
              name="deficient_faulty"
              placeholder="Indique a deficiência"
            />
            <RadioButtonInput name="is_pregnant" label="Grávida?" />
            <RadioButtonInput name="is_smoker" label="Fumante?" />
            <Input ref={imcInputRef} name="imc" placeholder="Estado de peso" />
            <RadioButtonInput name="is_drug_addict" label="Usa drogas?" />
            <RadioButtonInput name="is_alcoholic" label="Usa álcool?" />
            <RadioButtonInput name="is_hypertensive" label="Hipertenso?" />

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
