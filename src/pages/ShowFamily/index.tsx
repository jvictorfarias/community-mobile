import React, { useEffect, useState, useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Linking, Text, TouchableOpacity, Alert } from 'react-native';
import {
  IndividualContainer,
  IndividualName,
  IndividualsList,
  IndividualsListTitle,
  DeleteButton,
  DeleteText,
} from './styled';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import api from '../../services/api';

export interface Individual {
  name?: string;
  id: string;
}

interface Family {
  individuals: Array<Individual>;
}

const ShowFamily: React.FC = () => {
  const [family, setfamily] = useState<any>({} as any);
  const route = useRoute();
  const navigation = useNavigation();
  const familyID = route?.params.family;

  useEffect(() => {
    api.get(`/families/${familyID}`).then(({ data }) => {
      setfamily(data);
    });
  }, []);

  const message = 'COMUNICADO DO ACS:';

  const deleteFamily = useCallback((id) => {
    api.delete(`/families/${id}`);
    Alert.alert('Família Deletada', 'A família foi deletado com sucesso');
    navigation.navigate('Procurar');
  }, []);

  function makeCall() {
    Linking.openURL(`tel://+55${family?.address?.phone}`);
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=+55${family?.address?.phone}&text=${message}\n`,
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="user" size={96} color="#21c8b7" />
      </View>

      <View style={styles.family}>
        <Text style={[styles.familyProperty, { marginTop: 0 }]}>
          NOME DA FAMÍLIA
        </Text>
        <Text style={styles.familyValue}>{family.name}</Text>
      </View>
      <Text style={[styles.familyProperty, { marginTop: 0 }]}>ENDEREÇO</Text>

      <View style={styles.family}>
        <Text style={[styles.familyProperty, { marginTop: 0 }]}>RUA</Text>
        <Text style={styles.familyValue}>{family?.address?.street}</Text>

        <Text style={[styles.familyProperty, { marginTop: 0 }]}>NÚMERO</Text>
        <Text style={styles.familyValue}>{family?.address?.number}</Text>

        <Text style={[styles.familyProperty, { marginTop: 0 }]}>BAIRRO</Text>
        <Text style={styles.familyValue}>{family?.address?.district}</Text>

        <Text style={[styles.familyProperty, { marginTop: 0 }]}>CIDADE</Text>
        <Text style={styles.familyValue}>{family?.address?.city}</Text>

        <Text style={[styles.familyProperty, { marginTop: 0 }]}>CEP</Text>
        <Text style={styles.familyValue}>{family?.address?.zip}</Text>

        <Text style={[styles.familyProperty, { marginTop: 0 }]}>ESTADO</Text>
        <Text style={styles.familyValue}>{family?.address?.state}</Text>

        <Text style={[styles.familyProperty, { marginTop: 0 }]}>TELEFONE</Text>
        <Text style={styles.familyValue}>{family?.address?.phone}</Text>
      </View>

      <Text style={[styles.familyProperty, { marginTop: 0 }]}>
        MEMBROS DA FAMÍLIA
      </Text>

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
      <IndividualsList
        data={family.individuals}
        keyExtractor={(individual) => individual.id}
        ListHeaderComponent={
          <IndividualsListTitle>
            {family?.individuals?.length > 0
              ? 'Selecione um Indivíduo'
              : 'Nenhum indivíduo encontrado'}
          </IndividualsListTitle>
        }
        renderItem={({ item: individual }) => (
          <IndividualContainer
            onPress={() =>
              navigation.navigate('Mostrar Indivíduo da Família', {
                individual: individual?.id,
              })
            }>
            <IndividualName>{individual.name}</IndividualName>
          </IndividualContainer>
        )}
      />
      <DeleteButton onPress={() => deleteFamily(family?.id)}>
        <DeleteText>Deletar Família</DeleteText>
      </DeleteButton>
    </ScrollView>
  );
};
export default ShowFamily;
