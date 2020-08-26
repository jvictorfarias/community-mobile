import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Linking, Text, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

function DetailIndividual() {
    const { navigate } = useNavigation();
    const route = useRoute();

    const message = 'COMUNICADO DO ACS:'


    // Exemplo de entrada de dados da API
    const individual = {
        "family_id": "12345",
        "name": "Alan Cristian Silva de Oliveira",
        "cns": "123456789",
        "cpf": "06100000000",
        "birthday": "25/11/1992",
        "sex": "Masculino",
        "color": "Branco",
        "father_name": "undefined",
        "mother_name": "Célia Borges",
        "nationality": "Brasileiro",
        "birth_country": "Brasil",
        "birth_state": "Ceará",
        "is_school_frequency": "Sim",
        "education": "Superior",
        "work": "Autonômo",
        "is_deficient": "Não",
        "deficient_faulty": "undefined",
        "is_pregnant": "",
        "is_smoker": "Não",
        "imc": "27,1",
        "is_drug_addict": "Não",
        "is_alcoholic": "Não",
        "is_hypertensive": "Não",
        "is_diabetic": "Não",
        "is_stroke": "Não",
        "is_infarct": "Não",
        "is_heart_sick": "Não",
        "heart_disease": "Não",
        "is_kidney_sick": "Não",
        "kidney_disease": "Não",
        "is_respiratory_sick": "Não",
        "respiratory_disease": "Não",
        "is_hanseniase": "Não",
        "is_tuberculosis": "Não",
        "is_cancer": "Não",
        "is_hospitalization_last_12_months": "Não",
        "hospitalization_cause": "Não",
        "is_mental_sick": "Não",
        "is_bedridden": "Não",
        "is_domicilied": "Não",
        "is_homeless": "Não",

    }

    function navigateMoreDetails(individual) {
        navigate('Mais Detalhes', { individual });
    }

    function makeCall() {
        Linking.openURL(`tel://+55${individual.phone}`)
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=+55${individual.phone}&text=${message}\n`)
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: message,
            recipients: ['alancristian964@gmail.com'],
        })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Icon style={styles.icon} name="user" size={96} color="#21c8b7" />
            </View>

            <View style={styles.individual}>
                <Text style={[styles.individualProperty, { marginTop: 0 }]}>NOME COMPLETO</Text>
                <Text style={styles.individualValue}>{individual.name}</Text>

                <Text style={styles.individualProperty}>GÊNERO</Text>
                <Text style={styles.individualValue}>{individual.sex}</Text>

                <Text style={styles.individualProperty}>DATA DE NASCIMENTO</Text>
                <Text style={styles.individualValue}>{individual.birthday}</Text>

                <Text style={styles.individualProperty}>CARTÃO DO SUS</Text>
                <Text style={styles.individualValue}>{individual.cns}</Text>

                <Text style={styles.individualProperty}>CONDIÇÃO DE SAÚDE</Text>
                <Text style={styles.individualValue}>{individual.health_condition}</Text>
                <Text>Minha idéia aqui era um textarea com todos os campos de comorbidades</Text>

                <TouchableOpacity onPress={() => navigateMoreDetails(individual)}>
                    <Icon style={styles.userPlus} name="user-plus" size={24} color="#21c8b7" />
                </TouchableOpacity>

            </View>

            <View style={styles.contactBox}>
                <Text style={styles.contactTitle}>Entre em contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={makeCall}>
                        <Text style={styles.actionText}>Telefone</Text>
                        <Icon style={styles.actionIcon} name='phone' size={17} color="#0078c8" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                        <Icon style={styles.actionIcon} name='message-circle' size={17} color="#0078c8" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                        <Icon style={styles.actionIcon} name='mail' size={17} color="#0078c8" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
}


export default DetailIndividual;