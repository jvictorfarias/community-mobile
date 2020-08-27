import React, { useEffect, useState, useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Linking, Text, TouchableOpacity, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';

interface Individual {
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

import styles from './styles';
import api from '../../services/api';
import { DeleteButton, DeleteText } from './styled';
const ShowIndividual: React.FC = () => {
  const [individual, setIndividual] = useState<Individual>({} as Individual);
  const route = useRoute();
  const individualID = route?.params.individual;
  const navigation = useNavigation();

  useEffect(() => {
    api.get(`/individuals/${individualID}`).then(({ data }) => {
      setIndividual(data);
    });
  }, []);

  const message = 'COMUNICADO DO ACS:';

  const deleteIndividual = useCallback((id) => {
    api.delete(`/individuals/${id}`);
    Alert.alert('Indivíduo Deletado', 'O indivíduo foi deletado com sucesso');
    navigation.navigate('Procurar');
  }, []);

  function makeCall() {
    Linking.openURL(`tel://+55${individual.phone}`);
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=+55${individual.phone}&text=${message}\n`,
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="user" size={96} color="#21c8b7" />
      </View>

      <View style={styles.individual}>
        <Text style={[styles.individualProperty, { marginTop: 0 }]}>
          NOME COMPLETO
        </Text>
        <Text style={styles.individualValue}>{individual.name}</Text>

        <Text style={styles.individualProperty}>CARTÃO DO SUS</Text>
        <Text style={styles.individualValue}>{individual.cns}</Text>

        <Text style={styles.individualProperty}>CPF</Text>
        <Text style={styles.individualValue}>{individual.cpf}</Text>

        <Text style={styles.individualProperty}>DATA DE NASCIMENTO</Text>
        <Text style={styles.individualValue}>{individual.birthday}</Text>

        <Text style={styles.individualProperty}>SEXO</Text>
        <Text style={styles.individualValue}>{individual.sex}</Text>

        <Text style={styles.individualProperty}>RAÇA/COR</Text>
        <Text style={styles.individualValue}>{individual.color}</Text>

        <Text style={styles.individualProperty}>NOME COMPLETO DO PAI</Text>
        <Text style={styles.individualValue}>{individual.father_name}</Text>

        <Text style={styles.individualProperty}>NOME COMPLETO DA MÃE</Text>
        <Text style={styles.individualValue}>{individual.mother_name}</Text>

        <Text style={styles.individualProperty}>NACIONALIDADE</Text>
        <Text style={styles.individualValue}>{individual.nationality}</Text>

        <Text style={styles.individualProperty}>PAÍS DE NASCIMENTO</Text>
        <Text style={styles.individualValue}>{individual.birth_country}</Text>

        <Text style={styles.individualProperty}>
          MUNICÍPIO E UF DE NASCIMENTO
        </Text>
        <Text style={styles.individualValue}>{individual.birth_state}</Text>

        <Text style={styles.individualProperty}>
          FREQUENTA ESCOLA OU CRECHE
        </Text>
        <Text style={styles.individualValue}>
          {individual.is_school_frequency ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>
          CURSO MAIS ELEVADO QUE FREQUENTA OU FREQUENTOU
        </Text>
        <Text style={styles.individualValue}>{individual.education}</Text>

        <Text style={styles.individualProperty}>
          SITUAÇÃO NO MERCADO DE TRABALHO
        </Text>
        <Text style={styles.individualValue}>{individual.work}</Text>

        <Text style={styles.individualProperty}>TEM ALGUMA DEFICIÊNCIA</Text>
        <Text style={styles.individualValue}>
          {individual.is_deficient ? 'Sim' : 'Não'}
        </Text>

        {individual.is_deficient && (
          <>
            <Text style={styles.individualProperty}>QUAL(is)</Text>
            <Text style={styles.individualValue}>
              {individual.deficient_faulty}
            </Text>
          </>
        )}

        <Text style={styles.individualProperty}>ESTÁ GESTANTE</Text>
        <Text style={styles.individualValue}>
          {individual.is_pregnant ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>
          SOBRE O PESO, CONSIDERA-SE
        </Text>
        <Text style={styles.individualValue}>{individual.imc}</Text>

        <Text style={styles.individualProperty}>É FUMANTE</Text>
        <Text style={styles.individualValue}>
          {individual.is_smoker ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>FAZ USO DE ÁLCOOL</Text>
        <Text style={styles.individualValue}>
          {individual.is_alcoholic ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>FAZ USO DE OUTRAS DROGAS</Text>
        <Text style={styles.individualValue}>
          {individual.is_drug_addict ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>TEM HIPERTENSÃO ARTERIAL</Text>
        <Text style={styles.individualValue}>
          {individual.is_hypertensive ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>TEM DIABETES</Text>
        <Text style={styles.individualValue}>
          {individual.is_diabetic ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>TEVE AVC/DERRAME</Text>
        <Text style={styles.individualValue}>
          {individual.is_stroke ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>TEVE INFARTO</Text>
        <Text style={styles.individualValue}>
          {individual.is_infarct ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>
          TEM DOENÇA CARDÍACA/DO CORAÇÃO
        </Text>
        <Text style={styles.individualValue}>
          {individual.is_heart_sick ? 'Sim' : 'Não'}
        </Text>

        {individual.is_heart_sick && (
          <>
            <Text style={styles.individualProperty}>QUAL(IS)</Text>
            <Text style={styles.individualValue}>
              {individual.heart_disease}
            </Text>
          </>
        )}
        <Text style={styles.individualProperty}>
          TEM OU TEVE PROBLEMAS NOS RINS
        </Text>
        <Text style={styles.individualValue}>
          {individual.is_kidney_sick ? 'Sim' : 'Não'}
        </Text>
        {individual.is_kidney_sick && (
          <>
            <Text style={styles.individualProperty}>QUAL(IS)</Text>
            <Text style={styles.individualValue}>
              {individual.kidney_disease}
            </Text>
          </>
        )}

        <Text style={styles.individualProperty}>
          TEM DOENÇA RESPIRATÓRIA/NO PULMÃO
        </Text>
        <Text style={styles.individualValue}>
          {individual.is_respiratory_sick ? 'Sim' : 'Não'}
        </Text>

        {individual.is_respiratory_sick && (
          <>
            <Text style={styles.individualProperty}>QUAL(IS)</Text>
            <Text style={styles.individualValue}>
              {individual.respiratory_disease}
            </Text>
          </>
        )}

        <Text style={styles.individualProperty}>ESTÁ COM HANSENÍASE</Text>
        <Text style={styles.individualValue}>
          {individual.is_hanseniase ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>ESTÁ COM TUBERCULOSE</Text>
        <Text style={styles.individualValue}>
          {individual.is_tuberculosis ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>TEM OU TEVE CÂNCER</Text>
        <Text style={styles.individualValue}>
          {individual.is_cancer ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>
          TEVE ALGUMA INTERNAÇÃO NOS ÚLTIMOS 12 MESES
        </Text>
        <Text style={styles.individualValue}>
          {individual.is_hospitalization_last_12_months ? 'Sim' : 'Não'}
        </Text>

        {individual.is_hospitalization_last_12_months && (
          <>
            <Text style={styles.individualProperty}>POR QUAL CAUSA</Text>
            <Text style={styles.individualValue}>
              {individual.hospitalization_cause}
            </Text>
          </>
        )}

        <Text style={styles.individualProperty}>
          Algum problema de saúde mental por profissional de saúde
        </Text>
        <Text style={styles.individualValue}>
          {individual.is_mental_sick ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>ESTÁ ACAMADO</Text>
        <Text style={styles.individualValue}>
          {individual.is_bedridden ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>ESTÁ DOMICILIADO</Text>
        <Text style={styles.individualValue}>
          {individual.is_domicilied ? 'Sim' : 'Não'}
        </Text>

        <Text style={styles.individualProperty}>ESTÁ EM SITUAÇÃO DE RUA</Text>
        <Text style={styles.individualValue}>
          {individual.is_homeless ? 'Sim' : 'Não'}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Entre em contato</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={makeCall}>
            <Text style={styles.actionText}>Telefone</Text>
            <Icon
              style={styles.actionIcon}
              name="phone"
              size={17}
              color="#0078c8"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
            <Icon
              style={styles.actionIcon}
              name="message-circle"
              size={17}
              color="#0078c8"
            />
          </TouchableOpacity>
        </View>
      </View>
      <DeleteButton onPress={() => deleteIndividual(individual.id)}>
        <DeleteText>Deletar Indivíduo</DeleteText>
      </DeleteButton>
    </ScrollView>
  );
};
export default ShowIndividual;
