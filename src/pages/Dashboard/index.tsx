import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Header from '../../components/Header';
import { List } from 'react-native-paper';
import api from '../../services/api';
import styles from './styles'

const Dashboard: React.FC = () => {
  const [totalFamilies, setTotalFamilies] = useState(0);
  const [totalIndividuals, setTotalIndividuals] = useState(0);
  const [totalPregnants, setTotalPregnants] = useState(0);
  const [totalHypertensives, setTotalHypertensives] = useState(0);
  const [totalDiabetics, setTotalDiabetics] = useState(0);

  useEffect(() => {
    api.get('/statistics').then(({ data }) => {
      setTotalFamilies(data.totalFamilies);
      setTotalIndividuals(data.totalIndividuals);
      setTotalPregnants(data.totalPregnants);
      setTotalHypertensives(data.totalHypertensives);
      setTotalDiabetics(data.totalDiabetics);
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <List.Item
          style={styles.Box}
          title="Total de famílias"
          description={`${totalFamilies} famílias.` || 'Nenhuma'}
          left={(props) => <List.Icon {...props} icon="notebook" />}
        />
        <List.Item
          style={styles.Box}
          title="Total de indivíduos"
          description={`${totalIndividuals} indivíduos.` || 'Nenhum'}
          left={(props) => <List.Icon {...props} icon="notebook" />}
        />
        <List.Item
          style={styles.Box}
          title="Total de grávidas"
          description={`${totalPregnants} grávidas.` || 'Nenhuma'}
          left={(props) => <List.Icon {...props} icon="notebook" />}
        />
        <List.Item
          style={styles.Box}
          title="Total de hipertensos"
          description={`${totalHypertensives} hipertensos.` || 'Nenhum'}
          left={(props) => <List.Icon {...props} icon="notebook" />}
        />
        <List.Item
          style={styles.Box}
          title="Total de diabéticos"
          description={`${totalDiabetics} diabéticos.` || 'Nenhum'}
          left={(props) => <List.Icon {...props} icon="notebook" />}
        />
      </View>
    </View>
  );
};

export default Dashboard;
