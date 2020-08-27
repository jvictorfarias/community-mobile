import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import { Container, Title, FormHeader, FieldContainer } from './styles';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import RadioButtonInput from '../../components/Radio';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import ExtendedRadio from '../../components/ExtendedRadio';
import {
  color,
  nationality,
  education,
  work,
  deficient_fault,
  imc,
  heart_disease,
  kidney_disease,
  respiratory_disease,
} from '../../meta/data';

interface IndividualFormData {
  [x: string]: string | boolean;
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
  is_school_frequency: boolean;
  education: string;
  work: string;
  is_deficient: boolean;
  deficient_faulty: string;
  is_pregnant: boolean;
  is_smoker: boolean;
  imc: string;
  is_drug_addict: boolean;
  is_alcoholic: boolean;
  is_hypertensive: boolean;
  is_diabetic: boolean;
  is_stroke: boolean;
  is_infarct: boolean;
  is_heart_sick: boolean;
  heart_disease: string;
  is_kidney_sick: boolean;
  kidney_disease: string;
  is_respiratory_sick: boolean;
  respiratory_disease: string;
  is_hanseniase: boolean;
  is_tuberculosis: boolean;
  is_cancer: boolean;
  is_hospitalization_last_12_months: boolean;
  hospitalization_cause: string;
  is_mental_sick: boolean;
  is_bedridden: boolean;
  is_domicilied: boolean;
  is_homeless: boolean;
}

const CreateFamilies: React.FC = () => {
  const cpfRef = useRef();
  const birthdayRef = useRef();
  const phoneRef = useRef();
  const formRef = useRef<FormHandles>(null);
  const nameInputRef = useRef<TextInput>(null);
  const cnsInputRef = useRef<TextInput>(null);
  const [cpf, setCpf] = useState<any>('');
  const [birthday, setBirthday] = useState<any>('');
  const [phone, setPhone] = useState<any>('');
  const fatherInputRef = useRef<TextInput>(null);
  const motherInputRef = useRef<TextInput>(null);
  const birthCountryInputRef = useRef<TextInput>(null);
  const birthStateInputRef = useRef<TextInput>(null);
  const [isDeficient, setIsDeficient] = useState<boolean>(false);
  const [isHeartSick, setIsHeartSick] = useState<boolean>(false);
  const [isKidneySick, setIsKidneySick] = useState<boolean>(false);
  const [isRespiratorySick, setIsRespiratorySick] = useState<boolean>(false);
  const [isHospitalization, setIsHospitalization] = useState<boolean>(false);
  const hospitalizationCauseInputRef = useRef<any>(null);

  cpfRef.current = cpf;
  birthdayRef.current = birthday;
  phoneRef.current = phone;

  const navigation = useNavigation();
  const route = useRoute();
  const handleIndividualCreation = useCallback(
    async (data: IndividualFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome da família obrigatório.'),
          cns: Yup.string().required('CNS obrigatório.'),
          father_name: Yup.string(),
          mother_name: Yup.string().required('Nome da mãe obrigatório'),
          nationality: Yup.string().required('Nacionalidade obrigatória'),
          birth_country: Yup.string().required(
            'País de nascimento obrigatório',
          ),
          birth_state: Yup.string().required('Estado obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formData = {
          ...data,
          cpf: cpfRef.current,
          birthday: birthdayRef.current,
          phone: phoneRef.current,
          family_id: route!.params!.family,
        };

        try {
          await api.post('/individuals', formData);

          Alert.alert(
            'Cadastro Realizado',
            'Indivíduo cadastradado com sucesso.',
          );
          navigation.goBack();
        } catch (err) {
          Alert.alert('Cadastro Falhou', 'Tente novamente.');
          console.log(err);
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
          <Form ref={formRef} onSubmit={handleIndividualCreation}>
            <Input
              ref={nameInputRef}
              name="name"
              autoCapitalize="words"
              placeholder="Nome"
            />

            <Input
              ref={cnsInputRef}
              name="cns"
              autoCapitalize="words"
              placeholder="CNS"
            />
            <FieldContainer>
              <TextInputMask
                style={{ flex: 1 }}
                placeholder="CPF"
                value={cpf}
                type={'cpf'}
                onChangeText={(value) => setCpf(value)}
              />
            </FieldContainer>
            <FieldContainer>
              <TextInputMask
                style={{ flex: 1 }}
                placeholder="Data de nascimento"
                value={birthday}
                type={'datetime'}
                onChangeText={(text) => {
                  setBirthday(text);
                }}
                options={{
                  format: 'DD/MM/YYYY',
                }}
              />
            </FieldContainer>
            <FieldContainer>
              <TextInputMask
                style={{ flex: 1 }}
                placeholder="Telefone"
                value={phone}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                onChangeText={(value) => setPhone(value)}
              />
            </FieldContainer>
            <ExtendedRadio
              name="sex"
              title="Sexo"
              vertical={true}
              options={[
                { value: 'F', label: 'Feminino' },
                { value: 'M', label: 'Masculino' },
              ]}
            />
            <ExtendedRadio
              name="color"
              title="Cor"
              vertical={true}
              options={color}
            />
            <Input
              ref={fatherInputRef}
              name="father_name"
              placeholder="Nome do pai"
            />

            <Input
              ref={motherInputRef}
              name="mother_name"
              placeholder="Nome da mãe"
            />
            <ExtendedRadio
              name="nationality"
              title="Nacionalidade"
              vertical={true}
              options={nationality}
            />
            <Input
              ref={birthCountryInputRef}
              name="birth_country"
              placeholder="País de nascimento"
            />
            <Input
              ref={birthStateInputRef}
              name="birth_state"
              placeholder="Estado que nasceu"
            />
            <RadioButtonInput name="is_school" label="Frequência escolar?" />
            <ExtendedRadio
              name="education"
              title="Nível de educação"
              vertical={true}
              options={education}
            />
            <ExtendedRadio
              name="work"
              title="Trabalho"
              vertical={true}
              options={work}
            />
            <RadioButtonInput
              name="is_deficient"
              label="Possui deficiência?"
              state={setIsDeficient}
            />
            {isDeficient && (
              <ExtendedRadio
                name="deficient_faulty"
                title="Indique a deficiência"
                vertical={true}
                options={deficient_fault}
              />
            )}
            <RadioButtonInput name="is_pregnant" label="Grávida?" />
            <RadioButtonInput name="is_smoker" label="Fumante?" />
            <ExtendedRadio
              name="imc"
              title="Indique o estado de peso"
              vertical={true}
              options={imc}
            />
            <RadioButtonInput name="is_drug_addict" label="Usa drogas?" />
            <RadioButtonInput name="is_alcoholic" label="Usa álcool?" />
            <RadioButtonInput name="is_hypertensive" label="Hipertenso?" />
            <RadioButtonInput name="is_diabetic" label="Diabetico?" />
            <RadioButtonInput name="is_stroke" label="AVC?" />
            <RadioButtonInput name="is_infarct" label="Já teve infarto?" />
            <RadioButtonInput
              name="is_heart_sick"
              state={setIsHeartSick}
              label="Doença no coração?"
            />
            {isHeartSick && (
              <ExtendedRadio
                name="heart_disease"
                title="Qual a doença do coração?"
                vertical={true}
                options={heart_disease}
              />
            )}
            <RadioButtonInput
              name="is_kidney_sick"
              state={setIsKidneySick}
              label="Doença no rim?"
            />
            {isKidneySick && (
              <ExtendedRadio
                name="kidney_disease"
                title="Qual a doença no rim?"
                vertical={true}
                options={kidney_disease}
              />
            )}
            <RadioButtonInput
              name="is_respiratory_sick"
              label="Doença respiratória?"
              state={setIsRespiratorySick}
            />
            {isRespiratorySick && (
              <ExtendedRadio
                name="respiratory_disease"
                title="Qual a doença respiratória?"
                vertical={true}
                options={respiratory_disease}
              />
            )}

            <RadioButtonInput name="is_hanseniase" label="Possui hanseníase?" />
            <RadioButtonInput
              name="is_tuberculosis"
              label="Possui tuberculose?"
            />
            <RadioButtonInput name="is_cancer" label="Possui câncer?" />
            <RadioButtonInput
              name="is_hospitalization_last_12_months"
              label="Hospitalizado no último ano?"
              state={setIsHospitalization}
            />
            {isHospitalization && (
              <Input
                ref={hospitalizationCauseInputRef}
                name="hospitalization_cause"
                placeholder="Qual a causa?"
              />
            )}

            <RadioButtonInput
              name="is_mental_sick"
              label="Possui doença mental?"
            />
            <RadioButtonInput name="is_bedridden" label="Acamado?" />
            <RadioButtonInput name="is_domicilied" label="Domiciliado?" />
            <RadioButtonInput name="is_homeless" label="Sem teto?" />
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
